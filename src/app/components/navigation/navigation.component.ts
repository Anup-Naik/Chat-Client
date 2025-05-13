import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AppStateService } from '../../services/AppState.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  router = inject(Router);
  appState = inject(AppStateService);
  httpService = inject(HttpService);
  logout() {
    this.httpService.logout();
    this.router.navigate(['']);
  }
}
