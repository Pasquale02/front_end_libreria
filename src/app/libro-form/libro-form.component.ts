import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libro-form',
  templateUrl: './libro-form.component.html',
  styleUrls: ['./libro-form.component.css']
})
export class LibroFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submit(form) {
    console.log('total form = ', form);
    console.log('value form = ', form.value);
  }
}
