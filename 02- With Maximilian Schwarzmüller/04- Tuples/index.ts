const person: {
  name: string;
  age: number;
  hobbies: string[];
  occupation: [number, string];
} = {
  name: "Reza",
  age: 36,
  hobbies: ["Reading Books", "Learning", "Cooking"],
  occupation: [88, "Developer"],
};

person.occupation.push("Something");
console.log(person.occupation);
// push is exception.

// person.occupation[0] = "Something"; <---------- Error