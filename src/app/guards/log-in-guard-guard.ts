import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const logInGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const token = localStorage.getItem('token');

  if (token) {
    return true;
  }

  alert("Necesitas iniciar sesión para acceder a esta página");
  router.navigate(['/login']);
  return false;
};
