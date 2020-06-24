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
