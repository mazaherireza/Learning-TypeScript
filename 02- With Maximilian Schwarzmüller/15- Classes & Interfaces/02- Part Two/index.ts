class Department {
  title: string;
  constructor(_title: string) {
    this.title = _title;
  }
  describe(this: Department) {
    // this shoud always refer to an instance that's based on the Department class
    console.log(`Department: ${this.title}`);
  }
}

const accounting = new Department("Accounting");
console.log(accounting);

const dummy = { title: "DUMMY", describe: accounting.describe };
console.log(dummy.describe());
