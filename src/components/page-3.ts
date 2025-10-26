import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';


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
