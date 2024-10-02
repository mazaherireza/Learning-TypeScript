type Exam<Type extends string | number> = {
  title: string;
  deadline: Type;
};

const exam: Exam<string | number> = {
  title: "Geometry",
  deadline: "85",
};

console.log(exam);

enum Role {
  Admin = "Admin",
  user = "User",
}

interface User<Type> {
  firstName: Type;
  lastName: Type;
  role: Role;
}

const user: User<string> = {
  firstName: "Reza",
  lastName: "Mazaheri",
  role: Role.Admin,
};

console.log(user);
