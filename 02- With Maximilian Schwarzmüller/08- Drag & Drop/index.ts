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

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  formElement: HTMLFormElement;
  element: HTMLFormElement;
  titleElement: HTMLInputElement;
  descriptionElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    /* 
      TS ... not analyze our HTML file.
      getElementById doesn't know which element will return eventually ... has no chance of knowing that. 
      ... typecasting.

      <HTMLTemplateElement>document.getElementById() 
      Or
      document.getElementById() as HTMLTemplateElement
    */
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.formElement = document.querySelector("form")! as HTMLFormElement;
    /*
      When we create a new instance of this class, I immediately want to render a form 
      that belongs to this instance.
    */
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";
    this.titleElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;

    this.descriptionElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.configure();
    this.attach();
  }

  private clearForm() {
    this.formElement.reset();
  }

  private gatherUserInput(): [string, string] {
    const title = this.titleElement.value;
    const description = this.descriptionElement.value;
    return [title, description];
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
    }
    console.log(this.titleElement.value);
    this.clearForm();
  }

  @AutoBind
  private configure() {
    this.element.addEventListener("submit", this.submitHandler);
    // this.element.addEventListener("submit", this.submitHandler.bind(this));
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prjInput = new ProjectInput();

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
