import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService{
  private productsUrl = `${this.baseUrl}/products`;

  constructor(http: HttpClient) {
    super(http);
  }
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productsUrl);
  }
}
