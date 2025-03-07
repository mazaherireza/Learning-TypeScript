class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

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

    /*
      When we create a new instance of this class, I immediately want to render a form 
      that belongs to this instance.
    */
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.attach();
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prjInput = new ProjectInput();
