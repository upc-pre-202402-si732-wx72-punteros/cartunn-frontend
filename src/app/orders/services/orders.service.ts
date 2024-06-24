import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends BaseService {
  private ordersUrl = `${this.baseUrl}/orders`;

  token = localStorage.getItem('token');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  constructor(http: HttpClient) {
    super(http);
  }

  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.ordersUrl, {headers: this.headers});
  }
}
