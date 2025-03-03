const fetchedUser = {
  firstName: "Reza",
  lastName: "Mazaheri",
  occupation: {
    title: "Developer",
    company: "Hacoupian",
  },
};

// console.log(fetchedUser.occupation.title);

// You don't know with certainty if some property on an object is set or if it's maybe undefined.

// JS way of checking whether something exists before we dive deeper ...
// if(fetchedUser.occupation && fetchedUser.occupation.title)

// A nicer way in TS ... optional chaining operator.
// You can add a ? after the thing you're not sure whether it's to find or not.

console.log(fetchedUser?.occupation?.title);
