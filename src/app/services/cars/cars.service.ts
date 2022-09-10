import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Car } from 'src/app/model/car';
import subscribers from 'src/app/subscribers';
import { environment } from '../../../environments/environment';

const baseURL = environment.lotServiceBaseURL;

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(private http: HttpClient) {}

  listCars(page: Number, size: Number, filter: string): Observable<any[]> {
    return this.http
      .get<any>(`${baseURL}/cars?page=${page}&size=${size}&filter=${filter}`)
      .pipe(
        catchError((err) => {
          console.log(err);
          return of({ content: [] });
        })
      )
      .pipe(map(data => {
        return data.content;
      }));
  }

  saveCar(car: Car): Observable<any> {
    return this.http
    .post<any>(`${baseURL}/cars`, car)
    .pipe(
      catchError((err) => {
        console.log(err);
        subscribers.getMessagePublisher().publish({ message: err.error.logref, type: 'error' });
        return of({});
      })
    );
  }

  deleteCarByPlate(carPlate: string): Observable<any> {
    return this.http
    .delete<any>(`${baseURL}/cars/${carPlate}`)
    .pipe(
      catchError((err) => {
        console.log(err);
        subscribers.getMessagePublisher().publish({ message: err.error.logref, type: 'error' });
        return of({});
      })
    );
  }
}
