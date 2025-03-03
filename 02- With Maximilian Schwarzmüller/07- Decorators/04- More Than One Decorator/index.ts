function Logger(code: string) {
  console.log("1");
  return function (_: Function) {
    console.log(`Logger: ${code}`);
  };
}

function WithTemplate(template: string, hookID: string) {
  console.log("2");
  return function (_: Function) {
    console.log("WithTemplate");
    const hookElement = document.getElementById(hookID);
    if (hookElement) hookElement.innerHTML = template;
  };
}

// Decorators execute bottom up. WithTemplate runs first then Logger executes. (NOT factory decorators)
// Creation of our actual decorator functions happens in the order in which we specify ...
@Logger("CODE_80880")
@WithTemplate("", "app")
class Me {
  fullname = "Reza Mazaheri";
  constructor() {
    console.log("Constructor is called.");
  }
}
