interface Friend {
  firstName: string;
  lastName: string;
  age?: number;
}

interface Print {
  print(): void;
}

class Friend implements Friend, Print {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  print() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

const favourite = new Friend("Yousef", "Amini");
favourite.print();
