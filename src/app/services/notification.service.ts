import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

  add(request): Observable<any> {
    return this.http.post('/Notification/Add', request);
  }

  change(request): Observable<any> {
    return this.http.post('/Notification/Change', request);
  }

  get(request): Observable<any> {
    return this.http.post('/Notification/Gets', request);
  }
}
