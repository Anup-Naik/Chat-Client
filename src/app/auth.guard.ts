import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { HttpService } from './services/http.service';

export const authGuard: CanActivateFn = (route, state) => {
  const httpService = inject(HttpService);
  const router = inject(Router);
  if (!httpService.isLoggedin()) {
    router.navigate(['login']);
    return false;
  }
  return true;
};
