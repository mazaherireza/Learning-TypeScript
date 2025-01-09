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

// keyof is a keyword in TS which is used to extract the key type from an object type.
