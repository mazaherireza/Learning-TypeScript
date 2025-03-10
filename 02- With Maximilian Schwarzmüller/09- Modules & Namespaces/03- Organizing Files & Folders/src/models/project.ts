namespace App {
  export enum Status {
    Is_Doing = "IS_DOING",
    Done = "DONE",
  }

  export class Project {
    constructor(
      public title: string,
      public description: string,
      public status: Status
    ) {}
  }
}
