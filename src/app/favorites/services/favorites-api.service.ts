import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../../shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesApiService extends BaseService {

  private favoritesUrl = `${this.baseUrl}/favorites-list`;

  constructor(http: HttpClient) {
    super(http);
  }

  getFavoritesList(): Observable<any> {
    return this.http.get(this.favoritesUrl);
  }
}
