var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(_id, title) {
        this._id = _id;
        this.title = title;
        this.employees = [];
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.logEmployees = function () {
        console.log(this.employees);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    // Constructor is only accessible from inside the class.
    function AccountingDepartment(_id) {
        return _super.call(this, _id, "Accounting") || this;
    }
    AccountingDepartment.getInstance = function () {
        if (!this.instance) {
            this.instance = new AccountingDepartment("AC_8008");
        }
        return this.instance;
    };
    AccountingDepartment.prototype.describe = function () {
        console.log("Department: Accounting, id: ".concat(this._id));
    };
    return AccountingDepartment;
}(Department));
// We can't call new on this class.
var accounting = AccountingDepartment.getInstance();
accounting.describe();
