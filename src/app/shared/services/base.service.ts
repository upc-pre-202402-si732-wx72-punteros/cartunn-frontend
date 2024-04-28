import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products`);
  }

  getFavoritesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/favorites-list`);
  }

  getNotifications(): Observable<any> {
    return this.http.get(`${this.baseUrl}/notifications`);
  }

  getStatusReport(): Observable<any> {
    return this.http.get(`${this.baseUrl}/status-report`);
  }

  getYourCart(): Observable<any> {
    return this.http.get(`${this.baseUrl}/your-cart`);
  }

  getOrders(): Observable<any> {
    return this.http.get(`${this.baseUrl}/orders`);
  }

  getReturnsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/returns-list`);
  }
}
