import { Shape } from "../interfaces/shape";

export class Circle implements Shape {
  public constructor(private radius: number) {}
  public calculatePerimeter(): number {
    return Math.round(2 * Math.PI * this.radius);
  }
  public calculateSurface(): number {
    return Math.round(Math.PI * this.radius * this.radius);
  }
}
