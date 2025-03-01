interface _Error {
  id: string;
  [property: string]: string; // I don't know the exact property name, I also don't know the property count.
}

const error: _Error = {
  id: "ER_800800",
  username: "Must start with a character.",
};
