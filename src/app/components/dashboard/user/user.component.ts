import { Component, ElementRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserNavComponent } from '../user-nav/user-nav.component';
import { AppStateService } from '../../../services/AppState.service';

@Component({
  selector: 'app-user',
  imports: [UserNavComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute);
  elementRef = inject(ElementRef);
  appState = inject(AppStateService);

  ngOnInit(): void {
    this.elementRef.nativeElement.querySelector(
      '.chats-container'
    ).style.backgroundImage = `url(${this.appState.userBg()})`;
  }

  openChat(id: string) {
    this.router.navigate(['chat', id], { relativeTo: this.route });
  }
}
