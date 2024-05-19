import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends BaseService{
  private ordersUrl = `${this.baseUrl}/orders`;

  constructor(http: HttpClient) {
    super(http);
  }
  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.ordersUrl);
  }
}
