interface Func {
  (name: string): string;
}

const salutation: Func = (name: string) => {
  return `Salut ${name}!`;
};

console.log(salutation("Reza"));
