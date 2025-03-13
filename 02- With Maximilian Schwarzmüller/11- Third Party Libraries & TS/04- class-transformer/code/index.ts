import "reflect-metadata";
import { Product } from "./src/model/product.model";
import { plainToClass } from "class-transformer";

const products = [
  {
    title: "Book",
    price: 12,
  },
];

const loadedProducts = plainToClass(Product, products);

for (const product of loadedProducts) console.log(product.title);
