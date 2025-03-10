namespace App {
  type Listener<T> = (items: T[]) => void;

  class SuperState<T> {
    protected listeners: Listener<T>[] = [];
    constructor() {}
    addListener(listenerFn: Listener<T>) {
      this.listeners.push(listenerFn);
    }
  }

  export class State extends SuperState<Project> {
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

  export const state = State.getInstance();
}
