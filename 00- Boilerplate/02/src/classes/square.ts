import { Shape } from "../interfaces/shape";

export class Square implements Shape {
  public constructor(private side: number) {}
  public calculatePerimeter(): number {
    return 4 * this.side;
  }
  public calculateSurface(): number {
    return this.side * this.side;
  }
}
