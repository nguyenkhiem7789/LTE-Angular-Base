import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Common} from '../common';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let url = req.url;
    if (!url.startsWith('http')) {
      url = `${environment.apiUrl}${req.url}`;
    }
    const authReq = req.clone({
      url,
      withCredentials: true,
      headers: req.headers.set('DateFormat', Common.DateFormatServer)
    });
    return next.handle(authReq);
  }
}
