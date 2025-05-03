import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  isLoggedin = signal(true);
  chatBg = signal('/chatBg/ruins.jpg');
  constructor() {}
}
