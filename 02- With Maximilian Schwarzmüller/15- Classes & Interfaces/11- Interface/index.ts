interface Person {
  firstName: string;
  lastName: string;
  age: number;
  greet (phrase: string): void;
}

const me: Person = {
  firstName: "Reza",
  lastName: "Mazaheri",
  age: 36,
  greet(phrase){
    console.log(`${phrase} I'm ${this.firstName} ${this.lastName}.`);
  }
}

me.greet("Hello,")