"use strict";
class Elements {
  constructor() {
    this.list = [];
  }
  addElement(element) {
    this.list.push(element);
  }
  removeElement(element) {
    const index = this.list.indexOf(element);
    this.list.splice(index, 1);
  }
  printElement(element) {
    console.log(element.username);
  }
}
const element = new Elements();
element.addElement({ id: "88008800", username: "rezamazaheri" });
element.printElement({ id: "88008800", username: "rezamazaheri" });
