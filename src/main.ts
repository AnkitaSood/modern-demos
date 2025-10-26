import {Component, provideZonelessChangeDetection, signal} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  RouterLink,
  Routes,
  withViewTransitions,
} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {App} from './app/app';

@Component({
  imports: [RouterLink, MatButton],
  template: `
    <main class="content">
      <h1 class="headline-large">Page 1</h1>
      <p>This is the content for page 1.</p>
      <button mat-flat-button type="button" (click)="toggle()">Toggle Element</button>
      @if (isShown()) {
        <div class="insert-container" animate.enter="enter-animation" animate.leave="deleting">
          <p>The box is inserted</p></div>
      }
      <p>Why not check out <a routerLink="/page-2">page 2</a>?</p>
    </main>
  `,
  styles:`
    :host {
      display: block;
    }
    .enter-animation {
      animation: slide-fade 1s;
    }
    @keyframes slide-fade {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .insert-container {
      border: 1px solid #dddddd;
      margin-top: 1em;
      padding: 20px 20px 0 20px;
      font-weight: bold;
      font-size: 20px;
      opacity: 1;
      transition: opacity 200ms ease-in;
      @starting-style {
        opacity: 0;
      }
    }
    .deleting {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 500ms ease-out, transform 500ms ease-out;
    }`
})
export class Page1 {
  isShown = signal(false);  toggle() {    this.isShown.update((isShown) => !isShown);  }
}

@Component({
  imports: [RouterLink],
  template: `
     <div class="content-and-nav">
      <main class="content">
        <h1 class="headline-large">Page 2</h1>
        <p>This is the content for page 2.</p>
        <ol>
          <li>It</li>
          <li>also</li>
          <li>has</li>
          <li>a</li>
          <li>list!</li>
        </ol>
        <p>Ok, that's enough fun, you can go back to <a routerLink="/">page 1</a>, or date you carry on to <a routerLink="/page-3">page 3</a>?</p>
      </main>
      <nav class="main-nav">
        <ul>
          <li><a routerLink="/">Page 1</a></li>
          <li><a routerLink="/page-2">Page 2</a></li>
          <li><a routerLink="/page-3">Page 3</a></li>
        </ul>
      </nav>
    </div>
  `,
})
export class Page2 {}

@Component({
  imports: [RouterLink],
  template: `
    <div class="content-and-nav">
      <main class="content">
        <h1 class="headline-large">Page 3</h1>
        <p>This is the content for page 3.</p>
        <p>And that's it!</p>
      </main>
      <nav class="main-nav">
        <ul>
          <li><a routerLink="/">Page 1</a></li>
          <li><a routerLink="/page-2">Page 2</a></li>
          <li><a routerLink="/page-3">Page 3</a></li>
        </ul>
      </nav>
    </div>
  `,
})
export class Page3 {}



export const routes: Routes = [
  {
    path: '',
    component: Page1,
  },
  {
    path: 'page-2',
    component: Page2,
  },
  {
    path: 'page-3',
    component: Page3,
  },
];

bootstrapApplication(App, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes, withViewTransitions())],
});
