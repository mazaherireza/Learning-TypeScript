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
    Department.prototype.describe = function () {
        console.log("Department: ".concat(this.title, " with id: ").concat(this._id));
    };
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
        _this.lastProduct = "Init";
        return _this;
    }
    Object.defineProperty(ITDepartment.prototype, "getLastProduct", {
        get: function () {
            return this.lastProduct;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ITDepartment.prototype, "setLastProduct", {
        set: function (value) {
            this.lastProduct = value;
        },
        enumerable: false,
        configurable: true
    });
    ITDepartment.prototype.addAdministrator = function (administrator) {
        this.administrators.push(administrator);
    };
    ITDepartment.prototype.logAdministrators = function () {
        console.log(this.administrators);
    };
    return ITDepartment;
}(Department));
var frontendGroup = new ITDepartment("IT_2002", []);
frontendGroup.describe();
frontendGroup.setLastProduct = "Online Shop";
console.log(frontendGroup.getLastProduct);
