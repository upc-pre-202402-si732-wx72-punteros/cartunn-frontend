import {Injectable} from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../model/product.entity";

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService {
  private productsUrl = `${this.baseUrl}/products`;

  token = localStorage.getItem('token');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  constructor(http: HttpClient) {
    super(http);
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productsUrl, {headers: this.headers});
  }

  uploadProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, product, {headers: this.headers});
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.productsUrl}/${product.id}`, product, {headers: this.headers});
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.productsUrl}/${id}`, {headers: this.headers});
  }

}
