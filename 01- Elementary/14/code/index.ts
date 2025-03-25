enum Gender {
  Male = "Male",
  Female = "Female",
}

class Employee {
  firstname: string;
  lastname: string;
  position: string;
  gender: Gender;
  constructor(
    firstname: string,
    lastname: string,
    position: string,
    gender: Gender
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.position = position;
    this.gender = gender;
  }

  salutation(this: Employee) {
    if (this.gender == Gender.Male) {
      console.log(`Salut!, Mr ${this.lastname}.`);
    } else {
      console.log(`Salut! Mrs ${this.lastname}.`);
    }
  }
}

const emp = new Employee("Reza", "Mazaheri", "Frontend Developer", Gender.Male);
emp.salutation();
