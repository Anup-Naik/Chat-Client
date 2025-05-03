import { Component, ElementRef, inject, OnInit } from '@angular/core';
import { AppStateService } from '../services/AppState.service';

@Component({
  selector: 'app-pagenotfound',
  imports: [],
  template: `
    <section class="notFound">
      <h1>Page Not Found!</h1>
    </section>
  `,
  styles: `
  .notFound{
   height: var(--main-height);
   display:flex;
   justify-content:center;
   background-color:var(--lawrencium-end);
   background-repeat: no-repeat;
   background-position: center center;
   background-size: cover;
   background-blend-mode:overlay;
   align-items:center;
   & h1{
    font-size:5rem;
    letter-spacing:1px;
    background: linear-gradient(to right bottom , var(--windy-start),var(--windy-end));
    background-clip:text;
    color:transparent;
   }
  }
  `,
})
export class PagenotfoundComponent implements OnInit {
  elementRef = inject(ElementRef);
  appState = inject(AppStateService);
  ngOnInit(): void {
    this.elementRef.nativeElement.querySelector(
      '.notFound'
    ).style.backgroundImage = this.appState.randImage();
  }
}
