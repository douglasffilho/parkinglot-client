export class Car {
  plate: string;
  model: string;
  color: string;

  constructor(plate: string, model: string, color: string) {
    this.plate = plate.toUpperCase();
    this.model = model;
    this.color = color;
  }

  set _plate(value: string) {
    this.plate = value.toUpperCase();
  }

  get _plate(): string {
    return this.plate;
  }
}
