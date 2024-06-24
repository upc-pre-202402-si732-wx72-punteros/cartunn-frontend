import {Injectable} from "@angular/core";
import {BaseService} from "../../shared/services/base.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductRefundsApiService extends BaseService {
  private productRefundsUrl = `${this.baseUrl}/product-refund`;

  token = localStorage.getItem('token');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  constructor(http: HttpClient) {
    super(http);
  }

  getRefunds(): Observable<any[]> {
    return this.http.get<any[]>(this.productRefundsUrl, {headers: this.headers});
  }
}
