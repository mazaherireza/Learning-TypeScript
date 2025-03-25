var User = /** @class */ (function () {
  function User(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
  User.prototype.introduction = function () {
    console.log(
      ""
        .concat(this.firstname, " ")
        .concat(this.lastname, ", ")
        .concat(this.age, " Year(s) old.")
    );
  };
  return User;
})();
var user = new User("Reza", "Mazaheri", 35);
user.introduction();
