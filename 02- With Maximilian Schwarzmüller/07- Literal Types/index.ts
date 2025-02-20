const num = 19.2; // const num: 19.2

const combine = (
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
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