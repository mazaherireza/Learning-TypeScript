const prevention = () => {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
  };
};

class Project {
  title: string;
  deadline: string;
  collaborators: string[];
  constructor(title: string, deadline: string, collaborators: string[]) {
    console.log("___________Constructor___________");
    this.title = title;
    this.deadline = deadline;
    this.collaborators = collaborators;
  }
  @prevention()
  getTitle() {
    return this.title;
  }
}

const project = new Project("Online Shop", "30 May", [
  "Reza Mazaheri",
  "Yousef Amini",
]);

console.log(project);
