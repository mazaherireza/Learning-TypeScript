interface Person {
  readonly firstName: string;
  readonly lastName: string;
  age: number;
  introduce: () => void;
}

interface Developer {
  position: string;
  level: string;
}

class Me implements Person, Developer {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public position: string
  ) {}
  age = 36;
  level = "Mid";
  introduce = () => {
    console.log(`Hello, I'm ${this.firstName} ${this.lastName}.`);
  };
}

const me = new Me("Reza", "Mazaheri", "Frontend Developer");
me.introduce();
