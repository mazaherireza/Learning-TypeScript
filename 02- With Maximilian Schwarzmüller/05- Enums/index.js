var Occupation;
(function (Occupation) {
    Occupation[Occupation["FRONTEND"] = 0] = "FRONTEND";
    Occupation[Occupation["BACKEND"] = 1] = "BACKEND";
})(Occupation || (Occupation = {}));
var person = {
    name: "Reza",
    age: 36,
    hobbies: ["Reading Books", "Learning", "Cooking"],
    occupation: Occupation.FRONTEND,
};
console.log(person.occupation);
