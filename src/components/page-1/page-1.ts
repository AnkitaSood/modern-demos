import {Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';

@Component({
  imports: [RouterLink, MatButton],
  template: `
    <main class="content">
      <h1 class="headline-large">Page 1</h1>
      <button mat-flat-button type="button" (click)="toggle()">Show Chart</button>
      @if (isShown()) {
        <div class="chart-container" animate.enter="enter-animation" animate.leave="deleting">
          <h2>My chart</h2>
          <div class="container">
            <p class="label">I am a Y axis label</p>
            <div class="chart">
              <svg width="100%" height="100%" viewBox="0 0 100 50">
                <polygon points="0,50 0.00,41.67 14.29,33.33 28.57,25.00 42.86,0.00 57.14,48.33 71.43,45.00 85.71,41.67 100.00,16.67 100,50" class="line"></polygon>
              </svg>
            </div>
            <p class="label">I am an X axis label</p>
          </div>
        </div>
      }
      <p>Why not check out <a routerLink="/page-2">page 2</a>?</p>
    </main>
  `,
  styleUrls: ['./page-1.css']
})
export class Page1 {
  isShown = signal(false);

  toggle() {
    this.isShown.update((isShown) => !isShown);
  }
}
