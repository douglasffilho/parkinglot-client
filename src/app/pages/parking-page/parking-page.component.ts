import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/model/car';
import { LotsService } from 'src/app/services/lots/lots.service';
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

  constructor(private lotService: LotsService, private router: Router) {
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
    this.lotService
      .parkCar(this.car)
      .subscribe((response) => {
        if (response.updated) {
          this.router.navigate(['']);
        }
      });
  }
}
