var Department = /** @class */ (function () {
    function Department(_title) {
        this.title = _title;
    }
    Department.prototype.describe = function () {
        // this shoud always refer to an instance that's based on the Department class
        console.log("Department: ".concat(this.title));
    };
    return Department;
}());
var accounting = new Department("Accounting");
console.log(accounting);
var dummy = { title: "DUMMY", describe: accounting.describe };
console.log(dummy.describe());
