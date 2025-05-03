import { DatePipe } from '@angular/common';
import { Component, ElementRef, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService } from '../../../services/AppState.service';

@Component({
  selector: 'app-chat',
  imports: [DatePipe],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent implements OnInit {
  router = inject(Router);
  elementRef = inject(ElementRef);
  appState = inject(AppStateService);
  optionsEl!: HTMLDivElement;

  ngOnInit() {
    this.optionsEl =
      this.elementRef.nativeElement.querySelector('.chat-actions');
    this.elementRef.nativeElement.querySelector(
      '.chat'
    ).style.backgroundImage = `url(${this.appState.chatBg()})`;
  }
  overallViewControl(e: MouseEvent) {
    if (!(e.target instanceof SVGElement)) {
      this.optionsEl.classList.remove('active');
    }
  }

  goBack() {
    this.router.navigate(['dashboard']);
  }

  toggleOptions() {
    this.optionsEl.classList.toggle('active');
  }

  privateChat() {}

  clearChat() {}

  deleteChat() {}
}
