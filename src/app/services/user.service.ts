import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  get(request) {
    return this.http.post('https://localhost:44393/Users/Gets', request);
  }

  add(request) {
    return this.http.post('https://localhost:44393/Users/Add', request);
  }

  change(request) {
    return this.http.post('https://localhost:44393/Users/Change', request);
  }
}
