interface ValidatorConfig {
  // ... would be the class name for which ... register some validated properties
  [property: string]: {
    [validatableProperty: string]: string[]; // ["required", "positive"]
  };
}

enum Type {
  Positive = "POSITIVE",
  Required = "REQUIRED",
}

const registeredValidators: ValidatorConfig = {};

function Positive(target: any, propertyName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]: [Type.Positive],
  };
}

function Required(target: any, propertyName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]: [Type.Required],
  };
}

function validator(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const property in objValidatorConfig) {
    for (const validator of objValidatorConfig[property]) {
      switch (validator) {
        case Type.Required:
          isValid = isValid && !!obj[property];
          break;
        case Type.Positive:
          isValid = isValid && obj[property] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @Positive
  price: number;
  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.onsubmit = (event) => {
  event.preventDefault();
  const titleElement = document.querySelector("#title") as HTMLInputElement;
  const priceElement = document.querySelector("#price") as HTMLInputElement;
  const title = titleElement.value;
  const price = priceElement.valueAsNumber;
  const course = new Course(title, price);
  if (!validator(course)) {
    alert("Invalid Input");
    return;
  }
  console.log(course);
};
