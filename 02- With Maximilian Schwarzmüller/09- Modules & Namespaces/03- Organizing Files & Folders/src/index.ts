/// <reference path="./models/drag-drop.ts" />
/// <reference path="./models/project.ts" />
/// <reference path="./state.ts" />
/// <reference path="./utils/validation.ts" />
/// <reference path="./decorators/autobind.ts" />
/// <reference path="./components/component.ts" />
/// <reference path="./components/project-list.ts" />
/// <reference path="./components/project-input.ts" />

/* 
  ... once it is compiled to JS, this connection is desttoryed. ... tsconfig.json
  TS should concatenate namespaces ... into one single js file
  <script src="./dist/bundle.js" defer></script>
*/

namespace App {
  new ProjectInput();
  new ProjectList(Status.Is_Doing);
}
