import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";
import { Status } from "./models/status";

new ProjectInput();
new ProjectList(Status.Is_Doing);
