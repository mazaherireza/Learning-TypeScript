const merge = (objectA: object, objectB: object) =>
  Object.assign(objectA, objectB);

// Property 'firstName' does not exist on type 'object'.
// console.log(merge({ firstName: "Reza" }, { age: 36 }).firstName);

// <> after the function's name.
// function typedMerge<T, U>(objectA:T, objectB: U) {
//   return Object.assign(objectA, objectB);
// }

function typedMerge<T, U>(objectA: T, objectB: U) {
  return Object.assign(objectA, objectB);
}

// ... we don't care about the exact object.
const mergedObj = typedMerge({ firstName: "Reza" }, { age: 36 });
