interface User {
  [index: string]: string;
}

const user: User = {
  firstName: "Reza",
  lastName: "Mazaheri",
  gender: "Male",
};

console.log(user.firstName);
