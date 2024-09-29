"use strict";
class User {
    constructor(firstname, lastname, gender) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
    }
    fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}
class Student extends User {
    constructor(firstanme, lastname, gender, discipline) {
        super(firstanme, lastname, gender);
        this.discipline = discipline;
    }
}
