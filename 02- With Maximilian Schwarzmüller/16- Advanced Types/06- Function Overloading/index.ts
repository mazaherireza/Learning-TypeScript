type Combinable = string | number;

// function add(a: Combinable, b: Combinable) {
//   if (typeof a == "string" || typeof b == "string")
//     return a.toString() + b.toString();
//   return a + b;
// }

// TS would not be able to correctly infer the return type on its own. <-------- **
const result = add("Reza", "Mazaheri") as string; // use typecasting

// function overloads can help

// function information
function add(a: string, b: string): string
function add(a: number, b: number): number
// functin declaration
function add(a: Combinable, b: Combinable) {
  if (typeof a == "string" || typeof b == "string")
    return a.toString() + b.toString();
  return a + b;
}