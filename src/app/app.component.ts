import {Component, Input} from '@angular/core';
import {LibroDettagliComponent} from './libro-dettagli/libro-dettagli.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'libreria';
  libroLetto = true;

  greet() {
    alert('Hello child');
  }

  // per routing
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
