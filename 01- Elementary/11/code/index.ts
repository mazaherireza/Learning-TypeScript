const sum: (a: number, b: number) => number = (a, b) => a + b;

const show: (a: any) => void = (a) => console.log(a);

show(sum(1, 1001));
