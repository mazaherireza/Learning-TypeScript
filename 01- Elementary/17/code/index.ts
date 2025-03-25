enum Gender {
  Male = "Male",
  Female = "Female",
}

class User {
  firstname: string;
  lastname: string;
  gender: Gender;
  constructor(firstname: string, lastname: string, gender: Gender) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.gender = gender;
  }
  fullname() {
    return `${this.firstname} ${this.lastname}`;
  }
}

class Student extends User {
  discipline: string;
  constructor(
    firstanme: string,
    lastname: string,
    gender: Gender,
    discipline: string
  ) {
    super(firstanme, lastname, gender);
    this.discipline = discipline;
  }
}
