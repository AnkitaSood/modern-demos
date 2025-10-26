import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {ThemeSelector} from '../theme-selector/theme-selector';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ThemeSelector],
  template: `
   <header class="main-header">
      @if (router.url !== '/') {
        <a routerLink="/" class="back-and-title">
          <svg class="back-icon" viewBox="0 0 24 24"><path d="M20 11H7.8l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20v-2z"></path></svg>
          <span class="main-header-text">Demo site</span>
        </a>
      } @else {
        <span class="main-header-text">Demo site</span>
      }
     <app-theme-selector/>
  </header>
  <router-outlet/>
  `,
})
export class App {
  router = inject(Router);
}
