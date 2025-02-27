type Person = {
  firstName: string;
  lastName: string;
};

type Student = {
  descipline: string;
};

type Combined = Person & Student;

const freshman: Combined = {
  firstName: "Reza",
  lastName: "Mazaheri",
  descipline: "Computer Hardware Engineering",
};
