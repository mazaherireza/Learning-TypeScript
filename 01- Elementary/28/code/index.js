"use strict";
const exam = {
    title: "Geometry",
    deadline: "85",
};
console.log(exam);
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["user"] = "User";
})(Role || (Role = {}));
const user = {
    firstName: "Reza",
    lastName: "Mazaheri",
    role: Role.Admin,
};
console.log(user);
