function information<T extends string, U extends number | string>(
  title: T,
  pages: U
) {
  console.log(`${title} has ${pages} pages`);
}

information("A Man Called Ove", 425);
