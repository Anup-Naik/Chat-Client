import {
  computed,
  effect,
  inject,
  Injectable,
  signal,
  WritableSignal,
} from '@angular/core';
import { SocketService } from './socket.service';
import { Settings, User, AppState } from '../interfaces/user';

const randImageNo = () => {
  const imgNo = 18;
  let randNo = (Math.floor(Math.random() * imgNo) + 1).toString();
  if (randNo.length === 1) {
    randNo = randNo.padStart(2, '0');
  }
  return randNo;
};

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  socketService = inject(SocketService);
  settings: WritableSignal<Settings> = signal({
    chatBg: '/chatBg/02.jpg',
    userBg: '/chatBg/05.jpg',
  });
  user = signal<User | null>(null);
  jwt = signal('');
  isLoggedin = computed(() => {
    return this.jwt().length > 1;
  });

  constructor() {
    this.loadState();
    effect(() => {
      this.saveState();
    });
  }

  setJwt(jwt = '') {
    this.jwt.set(jwt);
  }
  setUser(userData: User) {
    this.user.set(userData);
  }
  getBgSetting(bgProp: 'chatBg' | 'userBg') {
    return +this.settings()[bgProp].split('/')[2].replace('.jpg', '');
  }
  setBgSetting(bgProp: 'chatBg' | 'userBg', bgId: number) {
    const newBgId = bgId.toString().padStart(2, '0');
    this.settings.update((prev) => {
      prev[bgProp] = `/chatBg/${newBgId}.jpg`;
      return {...prev};
    });
  }

  saveState() {
    const state: AppState = {
      jwt: this.jwt(),
      settings: this.settings(),
      user: this.user(),
    };
    localStorage.setItem('chatApp', JSON.stringify(state));
  }

  loadState() {
    const chatApp = localStorage.getItem('chatApp');
    if (!chatApp) return;
    const state: AppState = JSON.parse(chatApp);
    this.setJwt(state.jwt);
    this.settings.set(state.settings);
    if (state.user) this.setUser(state.user);
  }

  randImage() {
    const rand = randImageNo();
    return `url('/chatBg/${rand}.jpg')`;
  }
}
