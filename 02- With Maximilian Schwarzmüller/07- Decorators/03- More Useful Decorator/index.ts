// ... can be part of a library.
function WithTemplate(template: string, hookID: string) {
  return function (_: Function) {
    // Signlas to TS I don't need it.
    const hookElement = document.getElementById(hookID);
    if (hookElement) hookElement.innerHTML = template;
  };
}

/*
  ...
  return function(constructor: any) {
    const me = new constructor();
    document.....textContent = me.name;
  }
*/
@WithTemplate("", "app")
class Me {
  fullname = "Reza Mazaheri";
  constructor() {
    console.log("Constructor is called.");
  }
}

// Angular
// app.component.ts

/*
  @Component({
    selector: "app",
    template: "<h1>HEADING</h1>"
  })

  export class AppComponent {
    title: ""
  }
*/