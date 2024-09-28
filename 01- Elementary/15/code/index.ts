class User {
  firstname: string;
  lastname: string;
  private age: number;
  constructor(firstname: string, lastname: string, age: number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
  introduction() {
    console.log(`${this.firstname} ${this.lastname}, ${this.age} Year(s) old.`);
  }
}

const user = new User("Reza", "Mazaheri", 35);
user.introduction();
