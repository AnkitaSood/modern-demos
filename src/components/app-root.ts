import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {ThemeSelector} from '../theme-selector/theme-selector';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ThemeSelector, MatIcon],
  template: `
   <header class="main-header">
      @if (router.url !== '/') {
        <a routerLink="/" class="back-and-title">
          <mat-icon>arrow_back</mat-icon>
          <span class="main-header-text">Demo site</span>
        </a>
      } @else {
        <span class="main-header-text">Demo site</span>
      }
     <app-theme-selector/>
  </header>
  <router-outlet/>
  `,
  styles: `
    .main-header {
      align-items: center;
      background: var(--mat-sys-primary-container);
      color: var(--mat-sys-on-primary-container);
      contain: paint;
      display: flex;
      justify-content: space-between;
      height: 54px;
      padding: 0 var(--content-padding);
    }`
})
export class AppRoot {
  router = inject(Router);
}
