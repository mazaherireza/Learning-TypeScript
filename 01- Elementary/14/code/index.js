"use strict";
class Employee {
    constructor(firstname, lastname, position, gender) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.position = position;
        this.gender = gender;
    }
    salutation() {
        if (this.gender == "Male") {
            console.log(`Salut!, Mr ${this.lastname}.`);
        }
        else {
            console.log(`Salut! Mrs ${this.lastname}.`);
        }
    }
}
const emp = new Employee("Reza", "Mazaheri", "Frontend Developer", "Male");
emp.salutation();
