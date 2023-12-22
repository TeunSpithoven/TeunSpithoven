import { Animal } from "./Animal";

export class Wagon {
  number: number;
  points = 0;

  constructor(number: number) {
    this.number = number;
  }

  animals: Animal[] = [];
}
