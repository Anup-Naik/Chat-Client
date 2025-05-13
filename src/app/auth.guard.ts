import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AppStateService } from './services/AppState.service';

export const authGuard: CanActivateFn = (route, state) => {
  const appState = inject(AppStateService);
  const router = inject(Router);
  if (!appState.isLoggedin()) {
    router.navigate(['login']);
    return false;
  }
  return true;
};
