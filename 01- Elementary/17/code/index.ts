class User {
  firstname: string;
  lastname: string;
  gender: string;
  constructor(firstname: string, lastname: string, gender: string) {
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
  constructor(firstanme: string, lastname: string, gender: string, discipline: string) {
    super(firstanme, lastname, gender);
    this.discipline = discipline;
  }
}
