import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const noAuthInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.error.error === 'Token Expirado') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.navigateByUrl('/login');
      } else if (error.error.error === 'Token Invalido') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.navigateByUrl('/login');
      }
      return throwError(() => error);
    })
  );
};
