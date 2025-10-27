import {Routes} from '@angular/router';
import {Page1} from './components/page-1/page-1';
import {Page2} from './components/page-2';
import {Page3} from './components/page-3';

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
