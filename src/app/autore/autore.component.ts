import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-autore',
  templateUrl: './autore.component.html',
  styleUrls: ['./autore.component.css']
})
export class AutoreComponent implements OnInit {

  constructor() {
  }

  autori;

  // per ngSwitch
  dietSelection = 'gf';
  // dietSelection = 'veg';
  // dietSelection = 'paleo';

  ngOnInit() {
  }

  loadAutori() {
    this.autori = [
      {id: 1, nome: 'Manzoni'},
      {id: 2, nome: 'Alighieri'},
      {id: 3, nome: 'Pasolini'}
    ];
  }

  aggiungiAutore() {
    this.autori.push({id: 4, nome: 'Montale'});
  }

  removeAutore(autore) {
    const index = this.autori.indexOf(autore);
    this.autori.splice(index, 1);
  }

  updateAutore(autore) {
    autore.nome = 'UPDATED';
  }

}
