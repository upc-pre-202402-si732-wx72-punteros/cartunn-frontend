import { Injectable } from "@angular/core";
import { BaseService } from "../../shared/services/base.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductRefundsApiService extends BaseService {
  private productRefundsUrl = `${this.baseUrl}/returns-list`;

  constructor(http: HttpClient) {
    super(http);
  }

  getRefunds(): Observable<any[]> {
    return this.http.get<any[]>(this.productRefundsUrl);
  }
}
