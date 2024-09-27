enum Gender {
  Male = "Male",
  Female = "Female",
}

const person: {
  firstName: string;
  lastName: string;
  gender: Gender;
} = {
  firstName: "Reza",
  lastName: "Mazaheri",
  gender: Gender.Male,
};

console.log(person.gender);

console.log(Gender["Female"]);
console.log(Gender.Female);
