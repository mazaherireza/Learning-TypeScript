/*
  Some decorators, capable of returning something.
  ... a return value inside of the decorator function ...
  ... what you can return, depends on which kind of decorator you're working with. <----------- **

  ... class decorator ... you can return a new constructor function. <------------ **
  which will replace the old one ... class to which you added the decorator.
  ... new constructor function or new class ... doesn't need to have a name
  ... syntactic sugar for a constructor function ... which is based on the original constructor function ,
  so I keep all the properties of my original class 
*/

// { new } it is an object which can be newed.
function WithTemplate(template: string, hookID: string) {
  // ... be a constructor function
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      /*
        ... replace the class to which we added our decorator with a new class (with a new constructor function),
        where I execute the old logic ... I also add my own new logic
        therefore the template should only be rendered to the DOM if I really instantiate my object here
        and NOT ... class is defined.
      */
      constructor(..._: any[]) {
        // run when the class is instantiated.
        super();
        // render to the DOM if I really instantiate my object
        const hookElement = document.getElementById(hookID);
        //const person = new originalConstructor();
        if (hookElement) {
          hookElement.innerHTML = template;
          hookElement.querySelector("h1")!.textContent = this.name;
        }
      }
    }; // ... returning a new class.
  };
}

@WithTemplate("<h1>Heading</h1>", "app")
class Person {
  name = "Reza";
  constructor() {
    console.log("constructor is called.");
  }
}
