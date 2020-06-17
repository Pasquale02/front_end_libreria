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
