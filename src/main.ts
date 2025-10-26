import {provideZonelessChangeDetection} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {
  provideRouter, withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';
import {AppRoot} from './components/app-root';
import {routes} from './routes';

bootstrapApplication(AppRoot, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes, withViewTransitions(), withComponentInputBinding(),)],
});
