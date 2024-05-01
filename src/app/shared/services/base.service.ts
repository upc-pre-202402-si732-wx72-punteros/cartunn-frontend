import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  protected baseUrl = `${environment.serverBasePath}`;

  constructor(protected http: HttpClient) { }

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
