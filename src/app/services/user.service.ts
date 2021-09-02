import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  get(request): Observable<any> {
    return this.http.post('/Users/Gets', request);
  }

  add(request): Observable<any> {
    return this.http.post('/Users/Add', request);
  }

  change(request): Observable<any> {
    return this.http.post('/Users/Change', request);
  }

  getById(request): Observable<any> {
    return this.http.post('/Users/GetById', request);
  }

  login(request): Observable<any> {
    return this.http.post('/Users/Login', request);
  }
}
