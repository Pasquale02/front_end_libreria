import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() updated: object;

  libroToUpdate;

  constructor() {
  }

  ngOnInit() {
  }

  popolaForm(libro) {
    this.updated = libro;
    this.libroToUpdate = libro;
  }
}
