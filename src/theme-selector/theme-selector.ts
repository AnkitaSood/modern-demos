import {afterEveryRender, Component, computed, DOCUMENT, inject} from '@angular/core';
import {MatFabButton} from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-theme-selector',
  imports: [ MatIcon, MatFabButton],
  template:`<button matFab (click)="toggleTheme()">
   <mat-icon [fontIcon]="currentTheme() === 'dark' ? 'dark_mode' : 'light_mode'"/>
    </button>`
})
export class ThemeSelector {
  private themeService = inject(ThemeService);
  private document = inject(DOCUMENT);

  protected currentTheme = computed(() => this.themeService.currentTheme());

  constructor() {
    afterEveryRender({
      read: ()=> {
        if (this.currentTheme() === 'dark') {
          this.document.body.classList.add('dark-theme');
          this.document.body.classList.remove('light-theme');
        } else {
          this.document.body.classList.remove('dark-theme');
          this.document.body.classList.add('light-theme');
        }
      }
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
