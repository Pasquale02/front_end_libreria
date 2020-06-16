import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  libri = ['libro 1', 'libro 2', 'libro 3'];
  getTitle() {
    return 'Libro';
  }
}
