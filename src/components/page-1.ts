import {Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';

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
