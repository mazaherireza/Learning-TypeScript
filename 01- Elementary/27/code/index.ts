interface User {
  id: string;
  username: string;
}

class Elements<T extends User> {
  list: T[] = [];

  addElement(element: T) {
    this.list.push(element);
  }

  removeElement(element: T) {
    const index = this.list.indexOf(element);
    this.list.splice(index, 1);
  }

  printElement(element: T) {
    console.log(element.username);
  }
}

const element = new Elements();
element.addElement({ id: "88008800", username: "rezamazaheri" });
element.printElement({ id: "88008800", username: "rezamazaheri" });
