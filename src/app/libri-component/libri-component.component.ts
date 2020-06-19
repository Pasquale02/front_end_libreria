import { Component, OnInit } from '@angular/core';
import {LibriService} from '../services/libri.service';

@Component({
  selector: 'app-libri-component',
  templateUrl: './libri-component.component.html',
  styleUrls: ['./libri-component.component.css']
})
export class LibriComponentComponent implements OnInit {

  constructor(private libriService: LibriService) { }

  listaLibri = 'Elenco totale libri';
  // tslint:disable-next-line:ban-types
  libri;
  libroSelected = null;
  ngOnInit() {
    this.libriService.getLibri().subscribe(
      response => {
        this.libri = response;
      }
    );
  }
}
