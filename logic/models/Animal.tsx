export class Animal {
  id: number;
  type: string;
  size: string;
  points: number;

  constructor(id: number, type: string, size: string) {
    this.id = id;
    this.type = type;
    this.size = size;
    switch (size) {
      case "small":
        this.points = 1;
        break;
      case "medium":
        this.points = 3;
        break;
      case "large":
        this.points = 5;
        break;
      default:
        this.points = 0;
        break;
    }
  }
}
