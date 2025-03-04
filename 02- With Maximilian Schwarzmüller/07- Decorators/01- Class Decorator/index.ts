/*
  tsconfig.json
  ...
  "experimentalDecorators": true,
*/

// Decorators in general are all about classes.
// ... how many arguments depends on where you use the decorator.
function Logger(constructor: Function) {
  // I won't call it directly.
  console.log("Logger ...");
  console.log(constructor);
}

@Logger // <---------- Decorator
class Person {
  firstName = "Reza";
  constructor() {
    console.log("Constructor is called.");
  }
}

const me = new Person();

/*
  Decorators execute when your class is DEFINED, Not when it is instantiated.
*/
