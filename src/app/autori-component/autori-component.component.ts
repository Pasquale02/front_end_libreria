import {Component, OnInit} from '@angular/core';
import {AutoriService} from '../services/autori.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-autori-component',
  templateUrl: './autori-component.component.html',
  styleUrls: ['./autori-component.component.css']
})
export class AutoriComponentComponent implements OnInit {

  constructor(private autoriService: AutoriService) {
  }

  // tslint:disable-next-line:ban-types
  autori;

  ngOnInit() {
    this.autoriService.getAutori().subscribe(
      response => {
        this.autori = response;
      }
    );
  }

  trackAutore(index, autore) {
    return autore ? autore.id : undefined;
  }

  mostraLibri(autore) {
    console.log('mostra libri');
    this.autoriService.getAutore(autore.id_autore).subscribe(
      response => {
        console.log('autore retrieved==', response);
      }
    );
  }

  removeAutore(autore) {
    const index = this.autori.indexOf(autore);
    this.autoriService.deleteAutore(autore.id_autore).subscribe(
      response => {
        console.log('autore cancellato', response);
      }
    );
    this.autori.splice(index, 1);
  }

  updateAutore(autore) {
    autore.nome_autore = 'UPDATED';
  }
}
