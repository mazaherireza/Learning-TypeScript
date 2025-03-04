/*
  ... target which is either the prototype, if we're dealing with instance accessor.
  or  
  if we're dealing with a static one, it will be the constructor function. 
  ... type of any.

  ... the name of the member we're dealing with.
*/

function AccessorDecorator(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor Decorator");
  console.log(target); // prototype
  console.log(name); // The name of the accessor itself
  console.log(descriptor);
}

function MethodDecorator(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method Decorator");
  console.log(target);
  console.log(name); // The name of the method
  console.log(descriptor);
}

// Add them independently to any parameter you want to add a decorator to.
function ParameterDecorator(
  target: any,
  name: string | Symbol,
  position: number
) {
  console.log("Parameter Decorator");
  console.log(target);
  console.log(name);  // The name of the method in which we use this parameter. (getPriceWithTax)
  console.log(position); // 0
}

class Product {
  title: string;
  private _price: number;
  @AccessorDecorator
  set price(value: number) {
    if (value > 0) this._price = value;
    else throw new Error("Invalid Price - should be positive.");
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  @MethodDecorator
  getPriceWithTax(@ParameterDecorator tax: number) {
    return this._price + (1 + tax);
  }
}
