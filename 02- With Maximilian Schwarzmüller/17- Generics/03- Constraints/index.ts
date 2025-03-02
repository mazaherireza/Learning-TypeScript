// Both T and U, should be any kind of object. ... it has to be an object.
function constraintedMerge<T extends object, U extends object>(
  objA: T,
  objB: U
) {
  return Object.assign(objA, objB);
}

constraintedMerge({ firsName: "Reza", lastName: "Mazaheri" }, { age: 36 });
