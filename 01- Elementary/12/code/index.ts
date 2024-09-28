let x: any = 1001;
let y: unknown = "1001";

let prenom = "Reza";

// prenom = y <---- Type unknown is not assignable to type 'string'
prenom = x;
