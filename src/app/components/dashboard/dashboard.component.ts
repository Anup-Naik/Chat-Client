import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ChatComponent } from './chat/chat.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
