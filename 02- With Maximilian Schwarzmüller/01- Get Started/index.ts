const $ = document;
const input1 = $.querySelector("#number1")! as HTMLInputElement;
const input2 = $.querySelector("#number2")! as HTMLInputElement;
const form = $.querySelector("form")!;

const add = (input1: number, input2: number) => input1 + input2;

form.onsubmit = (event) => {
  event.preventDefault();
  console.log(add(+input1.value, +input2.value));
  form.reset();
};
