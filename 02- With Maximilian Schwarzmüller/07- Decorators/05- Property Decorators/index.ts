/*
  We need a class for any decorator we want to use <--------------- **
  but we don't have to add all decorators directly to the class.
*/

function Logger(target: any, key: string | Symbol) {
  console.log("Property Decorator");
  console.log(target); // <----- The prototype of our object, becuase there are no title and _price in there.
  console.log(key); // <------ title
}

/*
  If you add a decorator to a property, the decorator receives 2 arguments.
  The first argument is the target of the property. <------------ **
  ... prototype of the object.
  If we had a static property, target would refer to the constructor function. <---------- **

*/

class Product {
  @Logger // ... never instantiate...  executes when class definition is registered by JS.
  title: string;
  private _price: number;

  set price(value: number) {
    if (value > 0) this._price = value;
    else throw new Error("Invalid Price - should be positive.");
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price + (1 + tax);
  }
}
