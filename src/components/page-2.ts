import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

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
