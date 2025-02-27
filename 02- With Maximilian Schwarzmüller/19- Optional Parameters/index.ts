interface Person {
  firstName: string;
  lastName: string;
  age?: number;
  introduce?: () => void;
}

class Me implements Person {
  constructor(
    public firstName: string,
    public lastName: string,
    public age = 15
  ) {}
  introduce() {
    console.log(`Hello, I'm ${this.firstName} ${this.lastName}.`);
  }
}

const me = new Me("Reza", "Mazaheri", 36);
me.introduce();
