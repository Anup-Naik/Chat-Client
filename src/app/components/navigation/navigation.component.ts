import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserNavComponent } from '../user-nav/user-nav.component';
import { AppStateService } from '../../services/AppState.service';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive, UserNavComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  router = inject(Router);
  appState = inject(AppStateService);
  logout() {
    this.appState.isLoggedin.set(false);
    this.router.navigate(['']);
  }
}
