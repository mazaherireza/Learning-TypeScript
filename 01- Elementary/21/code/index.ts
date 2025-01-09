interface Func {
  (name: string): string;
}

const salutation = (name: string) => {
  return `Salut ${name}!`;
};

console.log(salutation("Reza"));
