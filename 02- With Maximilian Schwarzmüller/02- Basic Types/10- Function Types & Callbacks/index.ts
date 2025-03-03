const func = (a: number, b: number, callback: (num: number) => void) => {
  const result = a + b;
  callback(result);
  // void <------- We'll ignore any result you might be returning here.
};

func(1001, 1002, (input) => {
  // console.log(input)
  return input;
  // The only thing TS does not pick up is, if we return something here.
});
