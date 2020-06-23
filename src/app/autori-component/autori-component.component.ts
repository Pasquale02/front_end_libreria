import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AutoriService} from '../services/autori.service';
import {map} from 'rxjs/operators';
import {LibriService} from '../services/libri.service';

@Component({
  selector: 'app-autori-component',
  templateUrl: './autori-component.component.html',
  styleUrls: ['./autori-component.component.css']
})
export class AutoriComponentComponent implements OnInit {

  @Output() updateAutoreLibro = new EventEmitter();

  constructor(private autoriService: AutoriService, private libriService: LibriService) {
  }

  // tslint:disable-next-line:ban-types
  autori;
  libriByAutore;
  autoreSelected = null;

  ngOnInit() {
    this.autoriService.getAutori().subscribe(
      response => {
        this.autori = response;
      }
    );
  }

  mostraLibri(autore) {
    this.autoreSelected = autore.nome_autore + ' ' + autore.cognome_autore;
    this.libriService.getLibriPerAutore(autore.id_autore).subscribe(
      response => {
        console.log('libri by idautore retrieved==', response);
        this.libriByAutore = response;
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
    this.updateAutoreLibro.emit(autore);
  }
}
