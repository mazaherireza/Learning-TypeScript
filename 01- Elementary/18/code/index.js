"use strict";
class User {
  constructor(firstname, lastname, favourites) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.favourites = favourites;
  }
  fullname() {
    return `${this.firstname} ${this.lastname}`;
  }
  get getFavourites() {
    return this.favourites;
  }
}
class Student extends User {
  constructor(firstanme, lastname, favourites, discipline) {
    super(firstanme, lastname, favourites);
    this.discipline = discipline;
  }
}
const student = new Student(
  "Reza",
  "Mazaheri",
  ["Y❤", "Books", "Learning Foreign Languages"],
  "Computer Hardware Engineering"
);
console.log(student.getFavourites);
