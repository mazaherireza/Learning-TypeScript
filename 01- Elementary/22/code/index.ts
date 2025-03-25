interface User {
  [index: string]: string;
}

const user: User = {
  firstName: "Reza",
  lastName: "Mazaheri",
};

console.log(user.firstName);
