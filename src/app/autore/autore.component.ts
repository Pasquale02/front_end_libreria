import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-autore',
  templateUrl: './autore.component.html',
  styleUrls: ['./autore.component.css']
})
export class AutoreComponent implements OnInit {

  constructor() {
  }

  libri = ['libro 1', 'libro 2'];

  ngOnInit() {
  }

}
