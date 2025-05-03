import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AppStateService } from '../../services/AppState.service';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive],
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
