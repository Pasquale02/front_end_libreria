import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataNascitaValidator} from '../autori-component/dataNascita.validator';

@Component({
  selector: 'app-autore-form-register',
  templateUrl: './autore-form-register.component.html',
  styleUrls: ['./autore-form-register.component.css']
})
export class AutoreFormRegisterComponent implements OnInit {

  constructor() {
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
          Validators.minLength(3)
        ]
      ),
      data_nascita: new FormControl(
        '',
        [
          Validators.required,
          // inserito solo per vedere come funziona la validazione custom
          DataNascitaValidator.cannotContainSpace
        ]
      )
    })
  });

  inviaDati() {
    // let isValid = authService.login(this.form.value);
    let isValid = true;
    if (!isValid) {
      this.autoreForm.setErrors({
        invalidLogin: true
      });
    } else {
      console.log('autore salvato');
    }
  }

  ngOnInit() {
  }
}
