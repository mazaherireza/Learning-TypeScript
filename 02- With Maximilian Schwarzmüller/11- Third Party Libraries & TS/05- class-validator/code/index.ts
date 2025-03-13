import "reflect-metadata";
import { Product } from "./src/model/product.model";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

const products = [
  {
    title: "Book",
    price: 12,
  },
];

const loadedProducts = plainToClass(Product, products);

for (const product of loadedProducts) console.log(product.title);

const product = new Product("", -9);
validate(product).then((errors) => {
  if (errors.length < 0) {
    console.log("Validation Errors");
    console.error(errors);
  } else {
    console.log(product.getInformation());
  }
});
