// A generic type is a type which is kind of connected with some other types ...
// const numbers: (string | number)[] = ["Eight", 77];
// Or
const numbers: Array<string | number> = ["Eight", 77];

// This promise eventually will resolve to something ... string
// ... the main type is Promise ... which data it returns.
const resolvedPromise: Promise<number> = new Promise((resolve, _) => {
  setTimeout(() => {
    resolve(202);
  }, 2_000);
});

// Property 'split' does not exist on type 'number'.
// resolvedPromise.then((response) => response.split(" "));
