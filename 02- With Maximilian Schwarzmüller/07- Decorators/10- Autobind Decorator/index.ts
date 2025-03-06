function Autobind(_1: any, _2: string, descriptor: PropertyDescriptor) {
  /* ... set the this keyword to the object, this method belongs to it
   1. access to the method which should be called ... descriptor ... 
      the value key, holds the original function
   */

  const { value: originalMethod } = descriptor;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false, // does not show up in for in loop
    get() {
      const boundFn = originalMethod.bind(this);
      // this ... whatever is responsible for triggering the getter method
      return boundFn;
    },
  };
  return adjustedDescriptor;
}

class Show {
  message = "*";
  @Autobind
  show() {
    console.log(this.message);
  }
}

const sh = new Show();
const button = document.querySelector("button")!;
//button.addEventListener("click", sh.show); // undefined, this refers to the target of the event
// addEventListener binds this to the target of the event

/*
  The this keyword inside of that function will not have the same context or reference as it has 
  if ... sh.show() <------------- this refers to the sh

*/
// button.addEventListener("click", sh.show.bind(sh));

/*
  Now we'll build a decorator which we can add to show method.
  which will automatically bind "this" to the surrounding class
  ... to the object show method belongs to every time it's called no matter where we call it.
*/

// After the decorator is applied.
button.addEventListener("click", sh.show);
