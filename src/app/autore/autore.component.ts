import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-autore',
  templateUrl: './autore.component.html',
  styleUrls: ['./autore.component.css']
})
export class AutoreComponent implements OnInit {

  constructor() {
  }

  libri = [
    {id: 1, nome: 'Manzoni'},
    {id: 2, nome: 'Alighieri'},
    {id: 3, nome: 'Pasolini'}
  ];

  // per ngSwitch
  dietSelection = 'gf';
  // dietSelection = 'veg';
  // dietSelection = 'paleo';

  ngOnInit() {
  }

}
