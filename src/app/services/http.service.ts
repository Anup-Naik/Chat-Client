import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User } from '../interfaces/user';
import { AppStateService } from './AppState.service';
import { MyServerResponse } from '../interfaces/message';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  readonly url = signal('http://localhost:5000/api/v1');
  appState = inject(AppStateService);
  http = inject(HttpClient);
  jwt = signal('');
  isLoggedin = computed(() => {
    return this.jwt().length > 1;
  });

  setJwt(jwt = '') {
    this.jwt.set(jwt);
  }

  setUserData(data: User, jwt?: string) {
    if (jwt) {
      this.setJwt(jwt);
    }
    this.appState.setUser(data);
  }

  signup(user: User) {
    const res$ = this.http.post<MyServerResponse>(`${this.url()}/signup`, user);

    res$.subscribe({
      next: (res) => {
        if (res.status === 'success') {
          this.setUserData(res.data, res.data.token);
        }
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  login() {}

  logout() {
    this.setJwt();
  }
}
