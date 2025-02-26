var Department = /** @class */ (function () {
    /*
     TS provides 3 access modifiers to class properties and methods:
     private, protected, and public ...
    */
    function Department(_id, title) {
        this._id = _id;
        this.title = title;
        this.employees = [];
    }
    Department.prototype.describe = function () {
        console.log("Department: ".concat(this.title, " with id: ").concat(this._id));
    };
    Department.prototype.addEmployee = function (employee) {
        // ... one uniform of maniuplating employees. ... doing some verification or ...
        this.employees.push(employee);
    };
    Department.prototype.logEmployees = function () {
        console.log(this.employees);
    };
    return Department;
}());
var hardware_network = new Department("DEP_8008", "Hardware & Network");
hardware_network.describe();
console.log(hardware_network.addEmployee("Milad Mohammadi"));
hardware_network.logEmployees();
