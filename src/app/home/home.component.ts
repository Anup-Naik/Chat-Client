import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <section class="home">
      <div class="container">
        <h1 class="head">Welcome To HiChat ! <br />Don't Stop Interacting</h1>
        <article class="actions">
          <a class="start" routerLink="/signup">Start Chatting</a>
          <p class="subtext">
            Already have an Account&quest; <a routerLink="/login">login</a>
          </p>
        </article>
      </div>
    </section>
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
