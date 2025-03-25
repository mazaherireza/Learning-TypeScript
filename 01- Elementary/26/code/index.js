"use strict";
function information(user, name) {
  console.log(`${user[name]}`);
}
const user = {
  firstName: "Reza",
  lastName: "Mazaheri",
};
information(user, "firstName");
