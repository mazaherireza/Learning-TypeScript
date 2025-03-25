"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
const prevention = () => {
  return function (target, propertyKey, descriptor) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
  };
};
const propertyDec = (text) => {
  console.log(text);
  return function (target, propertyKey) {
    console.log(target);
    console.log(propertyKey);
  };
};
const parameterDec = (target, methodKey, parameterIndex) => {
  console.log(target);
  console.log(methodKey);
  console.log(parameterIndex);
};
class Project {
  constructor(title, deadline, collaborators) {
    console.log("___________Constructor___________");
    this.title = title;
    this.deadline = deadline;
    this.collaborators = collaborators;
  }
  getTitle() {
    return this.title;
  }
  introduction(delimiter) {
    console.log(`${this.title} ${delimiter}, Deadline: ${this.deadline}`);
  }
}
__decorate(
  [propertyDec("Collaborators")],
  Project.prototype,
  "collaborators",
  void 0
);
__decorate([prevention()], Project.prototype, "getTitle", null);
__decorate([__param(0, parameterDec)], Project.prototype, "introduction", null);
const project = new Project("Online Shop", "30 May", [
  "Reza Mazaheri",
  "Yousef Amini",
]);
console.log(project);
project.introduction("*");
