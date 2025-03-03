class Department {
  private employees: string[] = [];
  /*
   TS provides 3 access modifiers to class properties and methods:
   private, protected, and public ... 
  */
  constructor(private readonly _id: string, public title: string) {}

  describe(this: Department) {
    console.log(`Department: ${this.title} with id: ${this._id}`);
  }
  addEmployee(employee: string) {
    // ... one uniform of maniuplating employees. ... doing some verification or ...
    this.employees.push(employee);
  }
  logEmployees() {
    console.log(this.employees);
  }
}

const hardware_network = new Department("DEP_8008", "Hardware & Network");
hardware_network.describe();
console.log(hardware_network.addEmployee("Milad Mohammadi"));
hardware_network.logEmployees();
