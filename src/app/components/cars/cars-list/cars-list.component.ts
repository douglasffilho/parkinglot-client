import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/model/car';
import { CarsService } from 'src/app/services/cars/cars.service';

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
})
export class CarsListComponent implements OnInit {
  carsData: Car[] = [];
  page: Number = 1;
  size: Number = 10;
  filter: string = '';

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(): void {
    this.carsService
      .listCars(this.page, this.size, this.filter)
      .subscribe((cars) => {
        this.carsData = cars.map((car) => {
          return new Car(car.plate, car.model, car.color);
        });
      });
  }
}
