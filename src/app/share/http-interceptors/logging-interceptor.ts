import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize, tap} from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    let ok: string;

    // extend server response observale with logging
    return next.handle(req).pipe(
      tap(
        // Succeeds when there is a response; ignore other events
        event => ok = event instanceof HttpResponse ? 'succeeded' : '',
        error => ok = 'failed'
      ),
      finalize(() => {
        const elapsed = Date.now() - started;
        const msg = `${req.method} ${req.urlWithParams} ${ok} in ${elapsed} ms.`;
      })
    );
  }
}
