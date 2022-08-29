import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const baseURL = environment.lotServiceBaseURL;

@Injectable({
  providedIn: 'root',
})
export class LotsService {
  constructor(private http: HttpClient) {}

  getLots(): Observable<any> {
    return this.http.get<any>(`${baseURL}/lots`);
  }
}
