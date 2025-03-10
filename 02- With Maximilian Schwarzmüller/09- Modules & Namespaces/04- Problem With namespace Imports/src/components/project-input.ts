/// <reference path="component.ts"/>
/// <reference path="../decorators/autobind.ts"/>
/// <reference path="../models/validatable.ts"/>

namespace App {
  export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
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
}
