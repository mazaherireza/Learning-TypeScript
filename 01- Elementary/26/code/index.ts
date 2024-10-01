interface User {
  [index: string]: string;
}

function information<T extends User, U extends keyof User>(user: T, name: U) {
  console.log(`${user[name]}`);
}

const user: User = {
  firstName: "Reza",
  lastName: "Mazaheri",
};

information(user, "firstName");
