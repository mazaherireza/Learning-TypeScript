// Abstract methods are methods that we MUST define on any implementing subclass.

abstract class Book {
  title: string;
  author: string;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
  abstract getBookType(): string; // There is no implementation for the abstract method.
}

class Ebook extends Book {
  constructor(title: string, author: string) {
    super(title, author);
  }
  getBookType(): string {
    return "Ebook";
  }
}

const book = new Ebook("The Visit", "Friedrich Dürrenmatt");
console.log(book.getBookType());
