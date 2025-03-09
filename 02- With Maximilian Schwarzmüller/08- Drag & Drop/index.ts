enum Status {
  Is_Doing = "IS_DOING",
  Done = "DONE",
}

class Project {
  constructor(
    public title: string,
    public description: string,
    public status: Status
  ) {}
}

interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function validate(input: Validatable) {
  let isValid = true;
  if (input.required)
    isValid = isValid && input.value.toString().trim().length !== 0;
  // ... even if minLength is set to 0
  if (input.minLength != null && typeof input.value == "string")
    isValid = isValid && input.value.length >= input.minLength;
  if (input.maxLength != null && typeof input.value == "string")
    isValid = isValid && input.value.length <= input.maxLength;
  if (input.min != null && typeof input.value == "number")
    isValid = isValid && input.value >= input.min;
  if (input.max != null && typeof input.value == "number")
    isValid = isValid && input.value <= input.max;
  return isValid;
}

const AutoBind = function (
  _1: any,
  _2: string,
  descriptor: PropertyDescriptor
) {
  // ... methods in the end are just properties, properties which hold functions.
  const { value: originalMethod } = descriptor;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjustedDescriptor;
};

// ... we don't care about any value the listener function might return
type Listener<T> = (items: T[]) => void;

class SuperState<T> {
  protected listeners: Listener<T>[] = [];
  constructor() {}
  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
    /*
      The idea is that whenever something changes like ... add a new project,
      we call all listener functions.
    */
  }
}
// Project: A concrete value for generci place holder.
class State extends SuperState<Project> {
  private projects: Project[] = [];
  private static instance: State;
  // ... the private constructor to guarantee that this is a singleton class
  private constructor() {
    super();
  }

  // Subscription pattern

  static getInstance() {
    if (this.instance) return this.instance;
    this.instance = new State();
    return this.instance;
  }

  addProject(title: string, description: string) {
    const project = new Project(title, description, Status.Is_Doing);
    this.projects.push(project);
    // 1. How do we call addProject ... from inside the submitHandler? ...
    for (const listener of this.listeners) listener([...this.projects]);
  }
}

// ... always work with the exact same object
const state = State.getInstance();

// ... generic class ... when we inherit from it, we can set the concrete types for that.
// ... should never directly instaniated, ... should always be used for inheritance.
abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string
  ) {
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement;

    this.hostElement = document.getElementById(hostElementId)! as T;
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as U;
    if (newElementId) this.element.id = newElementId;

    this.attach(insertAtStart);
  }

  attach(insertAtStart: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtStart ? "afterbegin" : "beforeend",
      this.element
    );
  }

  abstract configure(): void;
  abstract renderContent(): void;
}

class ProjectList extends Component<HTMLDivElement, HTMLElement> {
  assignedProjects: Project[];

  constructor(private type: Status) {
    super("project-list", "app", false, `${type}-projects`);
    this.assignedProjects = [];
    // It's safer to make sure that the inheriting classes has to call these methods.
    this.configure();
    this.renderContent();
  }

  configure() {
    state.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((project) => {
        if (this.type == Status.Done) return project.status == Status.Done;
        else return project.status == Status.Is_Doing;
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " Projects  ";
  }

  private renderProjects() {
    const listItems = document.querySelector(
      `${this.type}-projects-list`
    )! as HTMLUListElement;
    listItems.innerHTML = "";
    for (const projectItem of this.assignedProjects) {
      const listItem = document.createElement("li");
      listItem.textContent = projectItem.title;
      listItems.appendChild(listItem);
    }
  }
}

class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  formElement: HTMLFormElement;
  titleElement: HTMLInputElement;
  descriptionElement: HTMLInputElement;

  constructor() {
    super("project-input", "app", true, "user-input");

    /* 
      TS ... not analyze our HTML file.
      getElementById doesn't know which element will return eventually ... has no chance of knowing that. 
      ... typecasting.

      <HTMLTemplateElement>document.getElementById() 
      Or
      document.getElementById() as HTMLTemplateElement
    */
    this.titleElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;

    this.descriptionElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.formElement = document.querySelector("form")! as HTMLFormElement;
    this.configure();
  }

  @AutoBind
  configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  renderContent() {}

  private clearForm() {
    this.formElement.reset();
  }

  private gatherUserInput(): [string, string] | void {
    const title = this.titleElement.value;
    const description = this.descriptionElement.value;

    const titleValidatable: Validatable = {
      value: title,
      required: true,
      minLength: 8,
      maxLength: 80,
    };

    const descriptionValidatable: Validatable = {
      value: description,
      required: false,
      minLength: 8,
      maxLength: 800,
    };

    if (validate(titleValidatable) && validate(descriptionValidatable))
      return [title, description];
    else return;
  }

  private submitHandler(event: Event) {
    event.preventDefault();
    // this <------ not point to the class actually.
    /*
      When we bind something to an event ... the method ... will have this bound to something else.
      ... current target of the event.
    */
    const input = this.gatherUserInput();
    if (Array.isArray(input)) {
      const [title, description] = input;
      state.addProject(title, description);
    }
    console.log(this.titleElement.value);
    this.clearForm();
  }
}

const prjInput = new ProjectInput();
const activeProjects = new ProjectList(Status.Is_Doing);
/*
  You shouldn't use undefind as a return type on functions, instead use void.
  f(): [string] | void {
    ...
    if() return 
    else {}
  }
*/

/*
  ... to check whether it is a tuple ... tuples in the end are just arrays
*/

// Reusabel scalable way
