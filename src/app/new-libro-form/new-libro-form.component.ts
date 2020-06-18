import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-libro-form',
  templateUrl: './new-libro-form.component.html',
  styleUrls: ['./new-libro-form.component.css']
})
export class NewLibroFormComponent implements OnInit {

  constructor() {
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
