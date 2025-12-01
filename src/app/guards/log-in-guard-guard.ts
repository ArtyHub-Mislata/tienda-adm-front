import { CanActivateFn } from '@angular/router';

export const logInGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
