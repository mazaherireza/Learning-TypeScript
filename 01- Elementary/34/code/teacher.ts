export class Teacher {
  firstName: string;
  lastName: string;
  department: string;
  constructor(prenom: string, nom: string, department: string) {
    this.firstName = prenom;
    this.lastName = nom;
    this.department = department;
  }

  getFullname() {
    return `${this.firstName} ${this.lastName}`;
  }
}
