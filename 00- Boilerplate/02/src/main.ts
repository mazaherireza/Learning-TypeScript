import { Square } from "./classes/square";
import { Circle } from "./classes/circle";

const main = (): void => {
  const square = new Square(12);
  console.log(`Square's perimeter is: ${square.calculatePerimeter()}`);
  console.log(`Square's surface is: ${square.calculateSurface()}`);
  console.log();
  const circle = new Circle(6);
  console.log(`Circle's perimeter is: ${circle.calculatePerimeter()}`);
  console.log(`Circle's surface is: ${circle.calculateSurface()}`);
};

main();
