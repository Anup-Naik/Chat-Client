import { Injectable, signal } from '@angular/core';

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
  isLoggedin = signal(true);
  chatBg = signal('/chatBg/01.jpg');
  userBg = signal('/chatBg/06.jpg');
  constructor() {}

  randImage() {
    const rand = randImageNo();
    return `url('/chatBg/${rand}.jpg')`;
  }
}
