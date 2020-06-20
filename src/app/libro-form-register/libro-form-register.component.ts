import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LibriService} from '../services/libri.service';

@Component({
  selector: 'app-libro-form-register',
  templateUrl: './libro-form-register.component.html',
  styleUrls: ['./libro-form-register.component.css']
})
export class LibroFormRegisterComponent implements OnInit {

  constructor(private libroService: LibriService) {
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
      )
    })
  });

  ngOnInit() {
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
