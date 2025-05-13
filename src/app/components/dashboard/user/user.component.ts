import {
  Component,
  computed,
  ElementRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserNavComponent } from '../user-nav/user-nav.component';
import { AppStateService } from '../../../services/AppState.service';
import { SettingsComponent } from './settings/settings.component';

@Component({
  selector: 'app-user',
  imports: [UserNavComponent, SettingsComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute);
  elementRef = inject(ElementRef);
  appState = inject(AppStateService);
  user = computed(this.appState.user);
  showSettings = signal(false);
  ngOnInit(): void {}

  openChat(id: string) {
    this.router.navigate(['chat', this.user()?._id], {
      relativeTo: this.route,
    });
  }

  toggleSettings() {
    this.showSettings.update((prev) => !prev);
  }
}
