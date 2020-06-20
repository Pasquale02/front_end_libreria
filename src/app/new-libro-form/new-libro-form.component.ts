import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-libro-form',
  templateUrl: './new-libro-form.component.html',
  styleUrls: ['./new-libro-form.component.css']
})
export class NewLibroFormComponent implements OnInit {

  formBuilder;

  /*
  * per il form senza logica*/

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

  // proprietà di input
  @Input() isRed: boolean;
  @Output() greetEvent = new EventEmitter();

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

  callParentGreet() {
    alert('saluti');
    this.greetEvent.emit();
  }

  /* fine form senza logica */
  ////////////////////////////////////////////////////

  constructor(fb: FormBuilder) {
    // alternativa a SignupFormComponent che usa il new FormGroup
    this.formBuilder = fb.group({
      name: fb.control('', Validators.required),
      // oppure
      // name: ['', Validators.required]
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }

  form = new FormGroup({
    // quando ho a che fare con un array di oggetti
    topics: new FormArray(
      [], // sarà il contenitore di tutti i topics del form
    )
  });

  ngOnInit() {
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: AbstractControl) {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}
