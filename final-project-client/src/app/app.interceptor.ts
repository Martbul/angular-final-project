import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable, Provider } from '@angular/core';
import { BehaviorSubject, Observable, catchError } from 'rxjs';
import { environment } from './enviroments/enviroments';

import { Router } from '@angular/router';
import { API_ERROR } from './shared/constants';
const apiUrl = environment.apiUrl;
@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(
    // @Inject(API_ERROR) private apiError: BehaviorSubject<Error | null>,
    private router: Router
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.startsWith('/api')) {
      req = req.clone({ url: req.url.replace('/api', apiUrl) });
    }

    return next.handle(req).pipe(catchError(err => {
        // this.apiError.next(err);
        this.router.navigate(['/error']);
        return [err];
      })
    );
  }
}

export const appInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true,
};
