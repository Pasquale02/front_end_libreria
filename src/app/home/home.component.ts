import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataNascitaValidator} from '../autori-component/dataNascita.validator';
import {AutoriService} from '../services/autori.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() updated: object;

  autoreToUpdate;

  constructor() {
  }

  ngOnInit() {
  }

  popolaForm(autore) {
    this.updated = autore;
    this.autoreToUpdate = autore;
  }

}
