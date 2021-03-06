import { Component } from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styles: [`
    :host {
      font-family: sans-serif;
    }
    header, footer, main {
      margin: 0 1em;
    }
    footer {
      margin-top: 1em;
      border-top: 1px solid #ccc;
      padding-top: 0.5em;
    }
  `],
  template: require('./app.component.html')
})
export class AppComponent {
  name: string = 'Brunch for Angular 2';
  url: string = 'http://colin.is/blog';
  constructor() {

  }
}
