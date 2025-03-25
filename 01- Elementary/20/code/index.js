"use strict";
class Friend {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  print() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}
const favourite = new Friend("Yousef", "Amini");
favourite.print();
