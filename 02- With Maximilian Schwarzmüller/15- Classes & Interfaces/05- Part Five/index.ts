class Department {
  private employees: string[] = [];
  constructor(private readonly _id: string, public title: string) {}

  describe(this: Department) {
    console.log(`Department: ${this.title} with id: ${this._id}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  logEmployees() {
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(_id: string, public administrators: string[]) {
    super(_id, "IT");
  }
  addAdministrator(administrator: string) {
    this.administrators.push(administrator);
  }
  logAdministrators() {
    console.log(this.addAdministrator);
  }
}

const frontendGroup = new ITDepartment("IT_2002", []);
frontendGroup.describe();
frontendGroup.addAdministrator("Reza Mazaheri");
frontendGroup.logAdministrators();