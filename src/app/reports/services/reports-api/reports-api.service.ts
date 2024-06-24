import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseService} from '../../../shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class ReportsApiService extends BaseService {
  private reportsUrl = `${this.baseUrl}/tunning-task`;

  token = localStorage.getItem('token');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  constructor(http: HttpClient) {
    super(http);
  }

  getStatusReport(): Observable<any[]> {
    return this.http.get<any[]>(this.reportsUrl, {headers: this.headers});
  }
}
