import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LotsService {
  constructor(private http: HttpClient) { }

  getLots(): Observable<any> {
    return this.http.get<any>('http://douglas-parkinglot.herokuapp.com/lots');
  }
}
