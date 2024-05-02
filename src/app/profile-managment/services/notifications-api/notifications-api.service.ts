import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../../../shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsApiService extends BaseService {
  private notificationsUrl = `${this.baseUrl}/notifications`;

  constructor(http: HttpClient) {
    super(http);
  }

  getNotifications(): Observable<any[]> {
    return this.http.get<any[]>(this.notificationsUrl);
  }
}
