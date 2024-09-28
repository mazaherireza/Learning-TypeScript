"use strict";
class User {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    fullname() {
        console.log(`${this.firstname} ${this.lastname}, ${this.age} Year(s) old.`);
    }
}
const user = new User("Reza", "Mazaheri", 35);
user.fullname();
