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
export class LotsService {
  constructor(private http: HttpClient) {}

  getLots(): Observable<any> {
    return this.http.get<any>(`${baseURL}/lots`).pipe(
      catchError((err) => {
        console.error(err.message);
        subscribers.messageUpdatedEvent.emit({
          logref: err?.error?.logref,
          message: err?.error?.message,
          type: 'error',
        });
        return of([]);
      })
    );
  }

  parkCar(car: Car): Observable<any> {
    return this.http
      .post<any>(`${baseURL}/lots`, car)
      .pipe(
        catchError((err) => {
          console.error(err.message);
          subscribers.messageUpdatedEvent.emit({
            logref: err?.error?.logref,
            message: err?.error?.message,
            type: 'error',
          });
          return of({ updated: false });
        })
      )
      .pipe(
        map((response) => {
          return { updated: response?.updated ?? true };
        })
      );
  }
}
