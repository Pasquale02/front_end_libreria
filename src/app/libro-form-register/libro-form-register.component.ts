import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LibriService} from '../services/libri.service';
import {AutoriService} from '../services/autori.service';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';

interface Autore {
  id_autore: number;
  cognome_autore: string;
  nome_autore: string;
  data_nascita_autore: string;
}

let autori;

@Component({
  selector: 'app-libro-form-register',
  templateUrl: './libro-form-register.component.html',
  styleUrls: ['./libro-form-register.component.css']
})
export class LibroFormRegisterComponent implements OnInit {

  @Input() receivedParentLibro: LibroFormRegisterComponent;
  @Input() autorePred;

  // per l'update
  idReceivedLibro = null;

  // per onChanges
  // tslint:disable-next-line:variable-name
  private id_libro: any;

  constructor(private libroService: LibriService, private autoriService: AutoriService) {
  }

  get titolo() {
    return this.libroForm.get('libro.titolo');
  }

  get isbn() {
    return this.libroForm.get('libro.isbn');
  }

  get prezzo() {
    return this.libroForm.get('libro.prezzo');
  }

  get autore() {
    return this.libroForm.get('libro.autore');
  }

  libroForm = new FormGroup({
    libro: new FormGroup({
      titolo: new FormControl(
        '',
        Validators.required
      ),
      isbn: new FormControl(
        '',
        Validators.required
      ),
      prezzo: new FormControl(
        '',
        Validators.required
      ),
      autore: new FormControl(
        '',
        Validators.required
      )
    })
  });

  public model: Autore;

  ngOnInit() {
    this.autoriService.getAutori().subscribe(
      response => {
        autori = response;
      }
    );
  }

  ngOnChanges() {
    if (this.receivedParentLibro) {
      this.idReceivedLibro = this.receivedParentLibro.id_libro;
      this.libroForm.get('libro').patchValue({
        titolo: this.receivedParentLibro.titolo,
        isbn: this.receivedParentLibro.isbn,
        prezzo: this.receivedParentLibro.prezzo,
      });
    }
    // per select typeahead
    if (this.autorePred) {
      this.model = this.autorePred;
    }
  }

  formatter = (autore: Autore) => autore.nome_autore;

  search = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    filter(term => term.length >= 2),
    map(term => autori.filter(autore => new RegExp(term, 'mi').test(autore.nome_autore)).slice(0, 10))
  )

  inviaDati(data) {
    const libro = data.value.libro;
    if (this.idReceivedLibro !== null) {
      libro.id_libro = this.idReceivedLibro;
    }
    this.libroService.postLibro(libro).subscribe(
      response => {
        console.log('response saved=', response);
      }
    );
  }
}
