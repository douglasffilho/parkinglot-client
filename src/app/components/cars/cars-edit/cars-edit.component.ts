import { Component, EventEmitter, Output } from '@angular/core';
import { Car } from 'src/app/model/car';
import { CarsService } from 'src/app/services/cars/cars.service';

@Component({
  selector: 'cars-edit',
  templateUrl: './cars-edit.component.html',
  styleUrls: ['./cars-edit.component.scss']
})
export class CarsEditComponent {
  car: Car = new Car('', '', '');

  colors: string[] = [
    'Vermelho',
    'Amarelo',
    'Verde',
    'Azul',
    'Branco',
    'Preto',
  ];

  @Output()
  refreshListEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(private carsService: CarsService) {}

  save() {
    this.carsService.saveCar(this.car).subscribe(savedCar => {
      this.car = new Car('', '', '');
      this.refreshListEvent.emit();
    });
  }
}
