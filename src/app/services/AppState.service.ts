import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { SocketService } from './socket.service';
import { Settings, User } from '../interfaces/user';

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
  settings: WritableSignal<Settings> = signal({
    chatBg: '/chatBg/01.jpg',
    userBg: '/chatBg/06.jpg',
  });
  user = signal<User | null>(null);
  socketService = inject(SocketService);

  constructor() {}

  setUser(userData: User) {
    console.log(userData);
    this.user.set(userData);
  }

  randImage() {
    const rand = randImageNo();
    return `url('/chatBg/${rand}.jpg')`;
  }
}
