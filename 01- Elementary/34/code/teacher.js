define(["require", "exports"], function (require, exports) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Teacher = void 0;
  class Teacher {
    constructor(prenom, nom, department) {
      this.firstName = prenom;
      this.lastName = nom;
      this.department = department;
    }
    getFullname() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  exports.Teacher = Teacher;
});
