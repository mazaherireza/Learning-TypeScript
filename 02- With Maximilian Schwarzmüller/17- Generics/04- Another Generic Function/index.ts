interface Lengthy {
  length: number;
}

// ... only care about that it has length proprty.
function count<T extends Lengthy>(element: T): [T, string] {
  let len = element.length;
  let text;
  len > 1 ? (text = `${len} characters`) : (text = `${len} character`);
  return [element, text];
}

count("Reza Mazaheri");
