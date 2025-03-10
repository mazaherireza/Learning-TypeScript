import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";
import { Status } from "./models/status.js";

new ProjectInput();
new ProjectList(Status.Is_Doing);
