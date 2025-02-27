class Department {
  title: string;
  constructor(_title: string) {
    this.title = _title;
  }
}

const accounting = new Department("Accounting");
console.log(accounting);
