import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  constructor() {
  }

  libri = ['libro 1', 'libro 2', 'libro 3'];
  isActive = false;
  twoWay = 'two way';
  libro = {
    titolo: 'Il mistero della piramide',
    pagesNumber: 123456,
    price: 19.29,
    ratings: 1.235584,
    autore: 'De amicis',
    isbn: '2222222222',
    releaseDate: new Date(2019, 3, 1)
  };

  testo = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
    'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
    'when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

  ngOnInit() {
  }

  getTitle() {
    return 'Libro';
  }

  onDivClicked() {
    console.log('div clicked');
  }

  onClick($event) {
    // per stoppare la propagazione
    $event.stopPropagation();
    console.log('cliked button', $event);
  }

  onKeyUp($event) {
    // keyCode deprecated, puoi usare $event.key
    console.log('pressed', $event.key);
    console.log('pressed target value', $event.target.value);
  }

  onTextEnter(mail) {
    console.log(mail);
  }

  onTwoWayBinding() {
    console.log('binding due vie: ', this.twoWay);
  }
}
