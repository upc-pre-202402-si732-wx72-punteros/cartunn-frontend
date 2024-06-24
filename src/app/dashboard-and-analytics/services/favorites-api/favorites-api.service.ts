import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../../../shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesApiService extends BaseService {

  private favoritesUrl = `${this.baseUrl}/favorites`;
  private productsUrl = `https://cartunnbackend.up.railway.app/api/v1/products`;

  constructor(http: HttpClient) {
    super(http);
  }

  getFavoritesList(): Observable<any> {
    return this.http.get(this.favoritesUrl);
  }

  getProductById(productId: number): Observable<any> {
    return this.http.get<any>(`${this.productsUrl}/${productId}`);
  }

  addFavorite(productId: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let favoriteId = productId.toString();
    return this.http.post<any>(this.favoritesUrl, { favoriteId: favoriteId, productId: productId }, { headers });
  }

  removeFavorite(productId: number): Observable<any> {
    return this.http.delete<any>(`${this.favoritesUrl}/${productId}`);
  }
}
