function information(user, key) {
  console.log("".concat(user[key]));
}
var user = {
  firstName: "Reza",
  lastName: "Mazaheri",
};
information(user, "firstName");
// keyof is a keyword in TS which is used to extract the key type from an object type.
