var Gender;
(function (Gender) {
  Gender["Male"] = "Male";
  Gender["Female"] = "Female";
})(Gender || (Gender = {}));
var Employee = /** @class */ (function () {
  function Employee(firstname, lastname, position, gender) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.position = position;
    this.gender = gender;
  }
  Employee.prototype.salutation = function () {
    if (this.gender == Gender.Male) {
      console.log("Salut!, Mr ".concat(this.lastname, "."));
    } else {
      console.log("Salut! Mrs ".concat(this.lastname, "."));
    }
  };
  return Employee;
})();
var emp = new Employee("Reza", "Mazaheri", "Frontend Developer", Gender.Male);
emp.salutation();
