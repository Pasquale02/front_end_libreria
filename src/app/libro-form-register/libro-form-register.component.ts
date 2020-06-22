import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LibriService} from '../services/libri.service';
import {AutoriService} from '../services/autori.service';

@Component({
  selector: 'app-libro-form-register',
  templateUrl: './libro-form-register.component.html',
  styleUrls: ['./libro-form-register.component.css']
})
export class LibroFormRegisterComponent implements OnInit {

  autori;
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

  ngOnInit() {
    this.autoriService.getAutori().subscribe(
      response => {
        this.autori = response;
      }
    );
  }

  inviaDati(data) {
    // let isValid = authService.login(this.form.value);
    let isValid = true;
    const libro = data.value.libro;

    this.libroService.postLibro(libro).subscribe(
      response => {
        console.log('response saved=', response);
      }
    );

    if (!isValid) {
      this.libroForm.setErrors({
        invalidLogin: true
      });
    } else {
      console.log('libro salvato');
    }
  }
}
