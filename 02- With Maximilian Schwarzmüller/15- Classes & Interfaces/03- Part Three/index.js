var Department = /** @class */ (function () {
    function Department(_title) {
        this.employees = [];
        this.title = _title;
    }
    Department.prototype.describe = function () {
        console.log("Department: ".concat(this.title));
    };
    Department.prototype.addEmployee = function (employee) {
        // ... one uniform of maniuplating employees. ... doing some verification or ...
        this.employees.push(employee);
    };
    return Department;
}());
var hardware_network = new Department("Hardware & Network");
hardware_network.describe();
console.log(hardware_network.addEmployee("Milad Mohadmmadi"));
