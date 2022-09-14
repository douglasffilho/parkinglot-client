import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
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
        subscribers.messageUpdatedEvent.emit({ message: err.error.logref, type: 'error' });
        return of([]);
      })
    );
  }
}
