import { Component } from '@angular/core';

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
   background:url("/chatBg/ruins.jpg")no-repeat center center/cover, linear-gradient(to right bottom , var(--lawrencium-start),var(--lawrencium-mid),var(--lawrencium-end));
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
export class PagenotfoundComponent {}
