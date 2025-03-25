var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var Gender;
(function (Gender) {
  Gender["Male"] = "Male";
  Gender["Female"] = "Female";
})(Gender || (Gender = {}));
var User = /** @class */ (function () {
  function User(firstname, lastname, gender) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.gender = gender;
  }
  User.prototype.fullname = function () {
    return "".concat(this.firstname, " ").concat(this.lastname);
  };
  return User;
})();
var Student = /** @class */ (function (_super) {
  __extends(Student, _super);g
  function Student(firstanme, lastname, gender, discipline) {
    var _this = _super.call(this, firstanme, lastname, gender) || this;
    _this.discipline = discipline;
    return _this;
  }
  return Student;
})(User);
