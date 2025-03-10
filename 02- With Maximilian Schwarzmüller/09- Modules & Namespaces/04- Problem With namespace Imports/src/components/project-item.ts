/// <reference path="component.ts"/>
/// <reference path="../models/drag-drop.ts"/>
/// <reference path="../models/project.ts"/>
/// <reference path="../decorators/autobind.ts"/>

namespace App {
  export class ProjectItem
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
}
