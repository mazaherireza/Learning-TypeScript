var Gender;
(function (Gender) {
  Gender["Male"] = "Male";
  Gender["Female"] = "Female";
})(Gender || (Gender = {}));
var person = {
  firstName: "Reza",
  lastName: "Mazaheri",
  gender: Gender.Male,
};
console.log(person.gender);
console.log(Gender["Female"]);
console.log(Gender.Female);
