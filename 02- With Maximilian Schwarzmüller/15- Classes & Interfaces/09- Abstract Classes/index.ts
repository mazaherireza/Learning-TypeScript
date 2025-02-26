abstract class Department {
  protected employees: string[] = [];
  constructor(protected readonly _id: string, public title: string) {}

  // The inheriting classes will need to provide their own implementation.
  abstract describe(this: Department): void;

  addEmployee(employee: string): void {
    this.employees.push(employee);
  }
  logEmployees(): void {
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  static mission = "Learning & Constructing";
  constructor(_id: string, public administrators: string[]) {
    super(_id, "IT");
  }
  
  describe(): void {
    console.log(`IT Department: ${this._id}`);   
  }

  addAdministrator(administrator: string): void {
    this.administrators.push(administrator);
  }
  logAdministrators(): void {
    console.log(this.administrators);
  }
}

const frontendGroup = new ITDepartment("IT_2002", []);
frontendGroup.describe();
