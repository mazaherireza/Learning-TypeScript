/// <reference path="./components/project-input.ts" />
/// <reference path="./components/project-list.ts" />
/// <reference path="./models/status.ts" />

/* 
  ... once it is compiled to JS, this connection is desttoryed. ... tsconfig.json
  TS should concatenate namespaces ... into one single js file
  <script src="./dist/bundle.js" defer></script>
*/

namespace App {
  new ProjectInput();
  new ProjectList(Status.Is_Doing);
}
