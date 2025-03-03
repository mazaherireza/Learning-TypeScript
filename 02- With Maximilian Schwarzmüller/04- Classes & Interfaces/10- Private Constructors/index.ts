abstract class Department {
  protected employees: string[] = [];
  constructor(protected readonly _id: string, public title: string) {}

  abstract describe(this: Department): void;

  addEmployee(employee: string): void {
    this.employees.push(employee);
  }
  logEmployees(): void {
    console.log(this.employees);
  }
}

class AccountingDepartment extends Department {
  private static instance: AccountingDepartment;
  // Constructor is only accessible from inside the class.
  private constructor(_id: string) {
    super(_id, "Accounting");
  }

  static getInstance(): AccountingDepartment {
    if (!this.instance) {
      this.instance = new AccountingDepartment("AC_8008");
    }
    return this.instance;
  }

  describe(): void {
    console.log(`Department: Accounting, id: ${this._id}`);
  }
}

// We can't call new on this class.
const accounting = AccountingDepartment.getInstance();
accounting.describe();
