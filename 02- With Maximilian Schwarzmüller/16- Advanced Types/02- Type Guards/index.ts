type Person = {
  firstName: string;
  lastName: string;
};

type Student = {
  descipline: string;
};

const log = (argument: Person | Student) => {
  // if(typeof argument === "Person") <--------- Wrong way, JS doesn't know this type. ... runs at runtime.
  // if(argument.firstName) <-------- Wrong way, TS doesn't allow us to access this property (firstName).
  if ("firstName" in argument) {
    // This is JS code.
    const { firstName, lastName } = argument;
    console.log(`${firstName} ${lastName}`);
  } else {
    console.log(`${argument.descipline}`);
  }
};

log({ firstName: "Reza", lastName: "Mazaheri" });

// For classes, ... another type of type guard: instance of

class Car {
  constructor(private model: string) {}
  get getModel() {
    return this.model;
  }
  drive() {
    console.log("Driving ...");
  }
}

class Truck {
  constructor(private model: string) {}
  get getModel() {
    return this.model;
  }
  drive() {
    console.log("Driving ...");
  }
  loadCargo() {
    console.log("Loading cargo");
  }
}

const display = (argument: Car | Truck) => {
  if ("loadCargo" in argument) { // Risk of mistyping
    argument.loadCargo();
  }
  // Elegant Way
  // This is JS code
  if (argument instanceof Truck) {
    argument.loadCargo();
  }
};
