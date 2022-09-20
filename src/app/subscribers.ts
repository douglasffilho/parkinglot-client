import { EventEmitter } from '@angular/core';
import { Car } from './model/car';

export default {
  carsListRefreshEvent: new EventEmitter<any>(),
  carsListFilterChangeEvent: new EventEmitter<string>(),
  messageUpdatedEvent: new EventEmitter<{
    logref: string;
    message: string;
    type: 'info' | 'error' | 'warning';
  }>(),
  carSearchSelectedEvent: new EventEmitter<Car>(),
  carParkedEvent: new EventEmitter<any>(),
};
