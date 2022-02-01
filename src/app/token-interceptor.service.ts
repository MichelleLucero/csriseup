import { Injectable, Injector } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authService = this.injector.get(AuthService);
    const token = authService.getToken();
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set(
          'Authorization',
          `Bearer ${authService.getToken()}`
        ),
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
