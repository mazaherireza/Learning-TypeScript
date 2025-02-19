enum Occupation {
  FRONTEND,
  BACKEND,
}

const person = {
  name: "Reza",
  age: 36,
  hobbies: ["Reading Books", "Learning", "Cooking"],
  occupation: Occupation.FRONTEND,
};
console.log(person.occupation) // 0