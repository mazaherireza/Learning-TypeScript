/*
  ... a decorator factory, ... returns a decorator function.
  ... allows us to configure it when we assign it as a decorator to something.  
*/

function Logger(code: string) {
  return function (constructor: Function) {
    console.log(`${code}`);
    console.log(constructor);
  };
}

@Logger("DECORATOR-8088")
class Person {
  name = "Reza";
  constructor() {
    console.log("constructor is called.");
  }
}
