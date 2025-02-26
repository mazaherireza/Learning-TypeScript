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
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(_id, administrators) {
        var _this = _super.call(this, _id, "IT") || this;
        _this.administrators = administrators;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log("IT Department: ".concat(this._id));
    };
    ITDepartment.prototype.addAdministrator = function (administrator) {
        this.administrators.push(administrator);
    };
    ITDepartment.prototype.logAdministrators = function () {
        console.log(this.administrators);
    };
    ITDepartment.mission = "Learning & Constructing";
    return ITDepartment;
}(Department));
var frontendGroup = new ITDepartment("IT_2002", []);
frontendGroup.describe();
