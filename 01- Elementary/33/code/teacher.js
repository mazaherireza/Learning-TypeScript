"use strict";
var NamesapcedTeacher;
(function (NamesapcedTeacher) {
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
    NamesapcedTeacher.Teacher = Teacher;
})(NamesapcedTeacher || (NamesapcedTeacher = {}));
