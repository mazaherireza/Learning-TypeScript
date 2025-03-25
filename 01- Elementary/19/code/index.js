"use strict";
// Abstract methods are methods that we MUST define on any implementing subclass.
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
class Ebook extends Book {
  constructor(title, author) {
    super(title, author);
  }
  getBookType() {
    return "Ebook";
  }
}
const book = new Ebook("1984", "George Orwell");
console.log(book.getBookType());
