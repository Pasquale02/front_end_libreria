import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataNascitaValidator} from '../autori-component/dataNascita.validator';
import {AutoriService} from '../services/autori.service';

@Component({
  selector: 'app-autore-form-register',
  templateUrl: './autore-form-register.component.html',
  styleUrls: ['./autore-form-register.component.css']
})
export class AutoreFormRegisterComponent implements OnInit, OnChanges {

  @Input() receivedParentAutore: AutoreFormRegisterComponent;
  idReceivedAutore = null;

  // creati perchè in ngOnChanges mi segnala errore
  // tslint:disable-next-line:variable-name
  private data_nascita_autore: any;
  // tslint:disable-next-line:variable-name
  private id_autore: any;
  private autorePred: AutoreFormRegisterComponent;

  model2: string;
  constructor(private autoriService: AutoriService) {
  }

  get nome_autore() {
    return this.autoreForm.get('autore.nome');
  }

  get cognome_autore() {
    return this.autoreForm.get('autore.cognome');
  }

  get data_nascita() {
    return this.autoreForm.get('autore.data_nascita');
  }

  // esempio di group innestato, è utile quando si hanno molti campi
  autoreForm = new FormGroup({
    autore: new FormGroup({
      nome: new FormControl(
        '',
        [
          Validators.required
        ]
      ),
      cognome: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(4)
        ]
      ),
      data_nascita: new FormControl(
        '',
        [
          Validators.required,
          // inserito solo per vedere come funziona la validazione custom
          // DataNascitaValidator.cannotContainSpace
        ]
      )
    })
  });

  inviaDati(data) {
    const autore = data.value.autore;
    if (this.idReceivedAutore !== null) {
      autore.id_autore = this.idReceivedAutore;
    }

    this.autoriService.postAutore(autore).subscribe(
      response => {
        console.log('response saved=', response);
      }
    );
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.receivedParentAutore) {
      this.autorePred = this.receivedParentAutore;
      this.idReceivedAutore = this.receivedParentAutore.id_autore;
      this.autoreForm.get('autore').patchValue({
        nome: this.receivedParentAutore.nome_autore,
        cognome: this.receivedParentAutore.cognome_autore,
        data_nascita: this.receivedParentAutore.data_nascita_autore,
      });
    }
  }
}
