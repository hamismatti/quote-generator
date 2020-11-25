import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  swansonQuotes() {
    return this.http.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
  }
}
