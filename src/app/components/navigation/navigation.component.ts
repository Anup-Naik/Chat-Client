import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserNavComponent } from '../user-nav/user-nav.component';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive, UserNavComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  isLoggedin = signal(true);
  router = inject(Router);

  logout() {
    this.isLoggedin.set(false);
    this.router.navigate([""])
  }
}
