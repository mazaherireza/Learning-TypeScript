class Department {
  protected employees: string[] = [];
  constructor(private readonly _id: string, public title: string) {}

  describe(this: Department) {
    console.log(`Department: ${this.title} with id: ${this._id}`);
  }
  addEmployee(employee: string): void {
    this.employees.push(employee);
  }
  logEmployees(): void {
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(_id: string, public administrators: string[]) {
    super(_id, "IT");
  }
  addAdministrator(administrator: string): void {
    this.administrators.push(administrator);
  }
  logAdministrators(): void {
    console.log(this.administrators);
  }
  addEmployee(employee: string): void {
    if (employee.length % 2 == 0) this.employees.push(employee);
  }
}

const frontendGroup = new ITDepartment("IT_2002", []);
frontendGroup.describe();
frontendGroup.addAdministrator("Sima Shafaei");
frontendGroup.logAdministrators();
frontendGroup.addEmployee("Anahita Karkhaneh");
