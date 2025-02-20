const generateError = (message: string, code: number): never=> {
  throw { // crashes our script.
    message,
    code,
  };
};

// generateError never produces a value
console.log(generateError("ERROR", 500));
