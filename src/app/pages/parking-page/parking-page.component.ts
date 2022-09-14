import { Component } from '@angular/core';
import { Car } from 'src/app/model/car';
import subscribers from 'src/app/subscribers';

@Component({
  selector: 'app-parking-page',
  templateUrl: './parking-page.component.html',
  styleUrls: ['./parking-page.component.scss'],
})
export class ParkingPageComponent {
  searchText: string = '';
  searchDebounce!: any;
  car!: Car;

  constructor() {
    subscribers.carSearchSelectedEvent.subscribe(this.selectCar);
  }

  onSearchTextChange() {
    if (this.searchDebounce) clearTimeout(this.searchDebounce);

    this.searchDebounce = setTimeout(() => {
      this.search();
    }, 750);
  }

  search() {
    subscribers.carsListFilterChangeEvent.emit(this.searchText);
  }

  selectCar = (car: Car) => {
    this.car = car;
  }

  parkCar() {
    console.log('Estacionado carro: ', this.car);
  }
}
