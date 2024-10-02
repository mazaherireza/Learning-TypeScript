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

const propertyDec = (text: string) => {
  console.log(text);
  return function (target: any, propertyKey: string | symbol) {
    console.log(target);
    console.log(propertyKey);
  };
};

const parameterDec = (
  target: Object,
  methodKey: string | symbol,
  parameterIndex: number
) => {
  console.log(target);
  console.log(methodKey);
  console.log(parameterIndex);
};

class Project {
  title: string;
  deadline: string;
  @propertyDec("Collaborators")
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
  introduction(@parameterDec delimiter: string) {
    console.log(`${this.title} ${delimiter}, Deadline: ${this.deadline}`);
  }
}

const project = new Project("Online Shop", "30 May", [
  "Reza Mazaheri",
  "Yousef Amini",
]);

console.log(project);
project.introduction("*")
