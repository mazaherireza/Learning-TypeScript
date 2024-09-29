class User {
  firstname: string;
  lastname: string;
  private favourites: string[];
  constructor(firstname: string, lastname: string, favourites: string[]) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.favourites = favourites;
  }
  fullname() {
    return `${this.firstname} ${this.lastname}`;
  }

  get getFavourites() {
    return this.favourites;
  }

  set setFavourites(favourites: string[]) {
    this.favourites = favourites;
  }
}

class Student extends User {
  discipline: string;
  constructor(
    firstanme: string,
    lastname: string,
    favourites: string[],
    discipline: string
  ) {
    super(firstanme, lastname, favourites);
    this.discipline = discipline;
  }
}

const student = new Student(
  "Reza",
  "Mazaheri",
  ["❤", "Books", "Learning Foreign Languages"],
  "Computer Hardware Engineering"
);

console.log(student.getFavourites);
