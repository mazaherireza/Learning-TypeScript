import { Status } from "./status";

export class Project {
  constructor(
    public title: string,
    public description: string,
    public status: Status
  ) {}
}
