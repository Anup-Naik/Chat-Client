import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User } from '../interfaces/user';
import { AppStateService } from './AppState.service';
import { MyServerResponse } from '../interfaces/message';
import { Observer } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly url = signal('http://localhost:5000/api/v1');
  private appState = inject(AppStateService);
  private router = inject(Router);
  private http = inject(HttpClient);
  jwt = signal('');
  isLoggedin = computed(() => {
    return this.jwt().length > 1;
  });
  private resObserver: Observer<MyServerResponse> = {
    next: (res) => {
      if (res.status === 'error') return;
      if ('token' in res.data) {
        this.setUserData(res.data.data, res.data.token);
      } else {
        this.setUserData(res.data);
      }
      this.router.navigate(['dashboard']);
    },
    error: (err) => {
      console.error(err);
    },
    complete: () => {},
  };

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

    res$.subscribe(this.resObserver);
  }

  login(creds: Pick<User, 'email' | 'password'>) {
    const { email, password } = creds;
    const res$ = this.http.post<MyServerResponse>(`${this.url()}/login`, {
      email,
      password,
    });

    res$.subscribe(this.resObserver);
  }

  logout() {
    this.setJwt();
  }
}
