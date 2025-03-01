interface Bird {
  type: "Bird"; // Literal Type
  flyingSpeed: number;
}

interface Horse {
  type: "Horse";
  runningSpeed: number;
}

const log = (animal: Bird | Horse) => {
  if ("flyingSpeed" in animal) {
    console.log(animal.flyingSpeed);
  }
  // if(animal instanceof Bird) Wrong way
  const { type } = animal;
  let speed;
  switch (type) {
    case "Bird": {
      speed = animal.flyingSpeed;
      break;
    }
    case "Horse": {
      speed = animal.runningSpeed;
      break;
    }
  }
  console.log(`Speed: ${speed}`);
};

log({ type: "Bird", flyingSpeed: 180 });
