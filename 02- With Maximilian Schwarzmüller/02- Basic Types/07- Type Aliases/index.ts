type Combinable = number | string;
type CombineDescriptor = "as-number" | "as-text";

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: CombineDescriptor
) => {
  let result;
  if (
    (typeof input1 == "number" && input2 == "number") ||
    resultConversion == "as-number"
  )
    result = +input1 + +input2;
  else result = input1.toString() + input2.toString();
  return result;
};

console.log(combine("1001", "1002", "as-number"));
