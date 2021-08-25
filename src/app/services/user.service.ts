import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  get(request): Observable<any> {
    return this.http.post('https://localhost:44393/Users/Gets', request);
  }

  add(request): Observable<any> {
    return this.http.post('https://localhost:44393/Users/Add', request);
  }

  change(request): Observable<any> {
    return this.http.post('https://localhost:44393/Users/Change', request);
  }
}
