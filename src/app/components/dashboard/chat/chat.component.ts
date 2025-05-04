import { DatePipe } from '@angular/common';
import { Component, ElementRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppStateService } from '../../../services/AppState.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-chat',
  imports: [DatePipe],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute);
  elementRef = inject(ElementRef);
  appState = inject(AppStateService);
  userid!: string;
  optionsEl!: HTMLDivElement;

  ngOnInit() {
    this.route.paramMap.pipe(
      map((params) => {
        this.userid = params.get('id') ?? '';
        console.log(this.userid);
      })
    ).subscribe();
    this.optionsEl =
      this.elementRef.nativeElement.querySelector('.chat-actions');
    this.elementRef.nativeElement.querySelector(
      '.chat'
    ).style.backgroundImage = `url(${this.appState.settings().chatBg})`;
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
