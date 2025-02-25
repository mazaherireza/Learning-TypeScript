class Department {
  title: string;
  private employees: string[] = [];

  constructor(_title: string) {
    this.title = _title;
  }
  describe(this: Department) {
    console.log(`Department: ${this.title}`);
  }
  addEmployee(employee: string) {
    // ... one uniform of maniuplating employees. ... doing some verification or ...
    this.employees.push(employee);
  }
  logEmployees() {
    console.log(this.employees);
  }
}

const hardware_network = new Department("Hardware & Network");
hardware_network.describe();
console.log(hardware_network.addEmployee("Milad Mohadmmadi"));
hardware_network.logEmployees();
