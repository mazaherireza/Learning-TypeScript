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
  private lastProduct: string;
  get getLastProduct() {
    return this.lastProduct;
  }
  set setLastProduct(value: string) {
    this.lastProduct = value;
  }

  constructor(_id: string, public administrators: string[]) {
    super(_id, "IT");
    this.lastProduct = "Init";
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
frontendGroup.setLastProduct = "Online Shop";
console.log(frontendGroup.getLastProduct);
