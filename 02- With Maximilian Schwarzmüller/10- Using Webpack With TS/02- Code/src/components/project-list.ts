import { Component } from "./component";
import { DragTarget } from "../models/drag-drop";
import { Project } from "../models/project";
import { Status } from "../models/status";
import { AutoBind } from "../decorators/autobind";
import { state } from "../state";
import { ProjectItem } from "./project-item";

export class ProjectList
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
