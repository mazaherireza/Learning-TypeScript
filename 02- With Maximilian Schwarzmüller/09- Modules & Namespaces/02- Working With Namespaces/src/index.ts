/// <reference path="./interfaces/drag-drop.ts" />
/// <reference path="./model/project-model.ts" />
/* 
  ... once it is compiled to JS, this connection is desttoryed. ... tsconfig.json
  TS should concatenate namespaces ... into one single js file
  <script src="./dist/bundle.js" defer></script>
*/
namespace App {
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

  type Listener<T> = (items: T[]) => void;

  class SuperState<T> {
    protected listeners: Listener<T>[] = [];
    constructor() {}
    addListener(listenerFn: Listener<T>) {
      this.listeners.push(listenerFn);
    }
  }

  class State extends SuperState<Project> {
    private projects: Project[] = [];
    private static instance: State;
    private constructor() {
      super();
    }

    static getInstance() {
      if (this.instance) return this.instance;
      this.instance = new State();
      return this.instance;
    }

    addProject(title: string, description: string) {
      const project = new Project(title, description, Status.Is_Doing);
      this.projects.push(project);

      this.updateListeners();
    }

    moveProject(title: string, newStatus: Status) {
      const project = this.projects.find((project) => project.title == title);
      if (project && project.status !== newStatus) {
        project.status = newStatus;
        this.updateListeners();
      }
    }

    private updateListeners() {
      for (const listener of this.listeners) listener([...this.projects]);
    }
  }

  const state = State.getInstance();
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

  class ProjectItem
    extends Component<HTMLUListElement, HTMLLIElement>
    implements Draggable
  {
    private project: Project;
    constructor(hostId: string, project: Project) {
      super("single-project", hostId, false);
      this.project = project;
      this.configure();
      this.renderContent();
    }
    @AutoBind
    dragStartHandler(event: DragEvent) {
      event.dataTransfer!.setData("text/plain", this.project.title);
      // ... how the cursor will look like.
      event.dataTransfer!.effectAllowed = "move";
    }

    dragEndHandler(_: DragEvent) {}

    configure() {
      this.element.addEventListener("dragstart", this.dragStartHandler);
      this.element.addEventListener("dragend", this.dragEndHandler);
      this.element.querySelector("h2")!.textContent = this.project.title;
      this.element.querySelector("h3")!.textContent = this.project.description;
    }

    renderContent() {}
  }

  class ProjectList
    extends Component<HTMLDivElement, HTMLElement>
    implements DragTarget
  {
    assignedProjects: Project[];

    constructor(private type: Status) {
      super("project-list", "app", false, `${type}-projects`);
      this.assignedProjects = [];
      this.configure();
      this.renderContent();
    }
    @AutoBind
    dragOverHandler(event: DragEvent) {
      if (event.dataTransfer && event.dataTransfer.types[0] == "text/plain") {
        event.preventDefault();
        const listElement = this.element.querySelector("ul")!;
        listElement.classList.add("droppable");
      }
    }
    @AutoBind
    dropHandler(event: DragEvent) {
      const title = event.dataTransfer!.getData("text/plain");
      state.moveProject(
        title,
        this.type == Status.Done ? Status.Is_Doing : Status.Done
      );
    }

    @AutoBind
    dragLeaveHandler(_: DragEvent) {
      const listElement = this.element.querySelector("ul")!;
      listElement.classList.remove("droppable");
    }

    configure() {
      this.element.addEventListener("dragover", this.dragOverHandler);
      this.element.addEventListener("drop", this.dropHandler);
      this.element.addEventListener("dragleave", this.dragLeaveHandler);

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
        new ProjectItem(this.element.querySelector("ul")!.id, projectItem);
      }
    }
  }

  class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
    formElement: HTMLFormElement;
    titleElement: HTMLInputElement;
    descriptionElement: HTMLInputElement;

    constructor() {
      super("project-input", "app", true, "user-input");
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
      const input = this.gatherUserInput();
      if (Array.isArray(input)) {
        const [title, description] = input;
        state.addProject(title, description);
      }
      console.log(this.titleElement.value);
      this.clearForm();
    }
  }

  new ProjectInput();
  new ProjectList(Status.Is_Doing);
}
