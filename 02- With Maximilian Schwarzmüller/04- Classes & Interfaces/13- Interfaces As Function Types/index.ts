interface Fn {
  (a: number, b: number): number;
}

const add: Fn = (x, y) => x + y;
console.log(add(1001, 2002));
