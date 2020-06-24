import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LibriService} from '../services/libri.service';
import {AutoriService} from '../services/autori.service';

@Component({
  selector: 'app-libro-form-register',
  templateUrl: './libro-form-register.component.html',
  styleUrls: ['./libro-form-register.component.css']
})
export class LibroFormRegisterComponent implements OnInit {

  @Input() receivedParentLibro: LibroFormRegisterComponent;

  // per l'update
  idReceivedLibro = null;
  autori;

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

  autorePred;

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

  ngOnInit() {
    this.autoriService.getAutori().subscribe(
      response => {
        this.autori = response;
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
  }

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
