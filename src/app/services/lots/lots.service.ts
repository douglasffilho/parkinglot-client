import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { Car } from 'src/app/model/car';
import subscribers from 'src/app/subscribers';
import { environment } from '../../../environments/environment';
import { LotsCacheService } from './lots-cache.service';

const baseURL = environment.lotServiceBaseURL;

@Injectable({
  providedIn: 'root',
})
export class LotsService {
  constructor(
    private http: HttpClient,
    private lotsCacheService: LotsCacheService
  ) {
    subscribers.carParkedEvent.subscribe(() => this.lotsCacheService.expireCache());
  }

  getLots(): Observable<any> {
    if (this.lotsCacheService.isCached()) {
      const cachedValue = this.lotsCacheService.getCachedValue();
      return of(cachedValue);
    }

    console.log('consulta vagas na API');

    return this.http
      .get<any>(`${baseURL}/lots`)
      .pipe(
        catchError((err) => {
          console.error(err.message);
          subscribers.messageUpdatedEvent.emit({
            logref: err?.error?.logref,
            message: err?.error?.message,
            type: 'error',
          });
          return of([]);
        })
      )
      .pipe(
        map((response) => {
          return this.lotsCacheService.cacheValue(response);
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
          subscribers.carParkedEvent.emit();
          return { updated: response?.updated ?? true };
        })
      );
  }
}
