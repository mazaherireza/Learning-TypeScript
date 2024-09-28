class Employee {
  firstname: string;
  lastname: string;
  position: string;
  gender: string;
  constructor(
    firstname: string,
    lastname: string,
    position: string,
    gender: string
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.position = position;
    this.gender = gender;
  }

  salutation(this: Employee) {
    if (this.gender == "Male") {
      console.log(`Salut!, Mr ${this.lastname}.`);
    } else {
      console.log(`Salut! Mrs ${this.lastname}.`);
    }
  }
}

const emp = new Employee("Reza", "Mazaheri", "Frontend Developer", "Male");
emp.salutation();
