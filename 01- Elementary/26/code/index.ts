interface User {
  [index: string]: string;
}

function information<U extends User, K extends keyof User>(user: U, key: K) {
  console.log(`${user[key]}`);
}

const user: User = {
  firstName: "Reza",
  lastName: "Mazaheri",
};

information(user, "firstName");

// keyof is a keyword in TS which is used to extract the key type from an object type.
