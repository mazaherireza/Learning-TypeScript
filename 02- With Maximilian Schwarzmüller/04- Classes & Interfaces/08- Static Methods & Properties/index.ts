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

// static methods and properties are detached from instances.
class ITDepartment extends Department {
  static mission = "Learning & Constructing";
  constructor(_id: string, public administrators: string[]) {
    super(_id, "IT");
  }

  addAdministrator(administrator: string): void {
    this.administrators.push(administrator);
    // this.mission (false)
    // ITDepartment.mission (true)
  }
  logAdministrators(): void {
    console.log(this.administrators);
  }
}

const frontendGroup = new ITDepartment("IT_2002", []);
frontendGroup.describe();
console.log(ITDepartment.mission);
