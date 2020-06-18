import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-autore-form',
  templateUrl: './autore-form.component.html',
  styleUrls: ['./autore-form.component.css']
})
export class AutoreFormComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  log(nomeAutore) {
    console.log('autore: ', nomeAutore);
  }

  submit(form) {
    console.log('total form = ', form);
    console.log('value form = ', form.value);
  }
}
