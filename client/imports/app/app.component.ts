import {Component} from '@angular/core';
import {NavbarComponent} from './components/navbar/navbar.component'


@Component({
  selector: 'app',
  template: `
    <div>
        <app-navbar></app-navbar>
        <router-outlet></router-outlet>
    </div>

`
})
export class AppComponent {
  constructor() {
  }
}
