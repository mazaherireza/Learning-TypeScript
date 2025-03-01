const input = document.getElementById("input")! as HTMLInputElement;
// ! .. will never yield null.
// or
// const input = <HTMLInputElement>document.getElementById("input")!;
input.value = "Reza Mazaheri";

// If we are not sure whether this expression will return null or not, use if check.
// const input = document.getElementById("input")
// if (input) (input as HTMLInputElement).value = "Reza Mazaheri";
