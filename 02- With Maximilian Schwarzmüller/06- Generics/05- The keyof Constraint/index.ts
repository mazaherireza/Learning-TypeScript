function extract<T extends object, U extends keyof T>(obj: T, key: U) {
  return `Value: ${obj[key]}`;
}

console.log(extract({ firstName: "Reza" }, "firstName"));
