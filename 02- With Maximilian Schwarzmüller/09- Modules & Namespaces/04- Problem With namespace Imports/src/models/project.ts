/// <reference path="./status.ts" />

namespace App {
  export class Project {
    constructor(
      public title: string,
      public description: string,
      public status: Status
    ) {}
  }
}
