import { Injectable } from '@angular/core';
import { Socket, io } from 'socket.io-client';
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: Socket;
  constructor() {
    this.socket = io('http://127.0.0.1:5000');
    this.socket.on('message', (data) => {
      console.log(data);
    });
  }  

  sendMessage(message: Message) {
    this.socket.emit('message', message);
  }
}
