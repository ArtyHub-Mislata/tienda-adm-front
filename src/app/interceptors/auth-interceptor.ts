import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  
  const token = localStorage.getItem('token');

  let newReq = req;

  if (token) {
    newReq = req.clone({
      setHeaders: {
        Authorization: token
      }
    });
  }

  return next(newReq);
};
