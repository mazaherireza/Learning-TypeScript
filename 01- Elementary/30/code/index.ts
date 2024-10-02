interface _Project<Type extends string> {
  title: Type;
  deadline: Type;
  collaborators: Type[];
}

const Logger = (text: string) => {
  return function (_: Function) {
    console.log(text);
  };
};

@Logger("Logger")
class Project implements _Project<string> {
  title: string;
  deadline: string;
  collaborators: string[];
  constructor(title: string, deadline: string, collaborators: string[]) {
    console.log("___________Constructor___________");
    this.title = title;
    this.deadline = deadline;
    this.collaborators = collaborators;
  }
}

const project = new Project("Online Shop", "30 May", [
  "Reza Mazaheri",
  "Yousef Amini",
]);

console.log(project);
