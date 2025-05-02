import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  isLoggedin = signal(true);
  constructor() {}
}
