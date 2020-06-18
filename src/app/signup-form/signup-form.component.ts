import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {UsernameValidators} from './username.validators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  userForm = new FormGroup({
    username: new FormControl(
      '',
      [
        Validators.required,
        UsernameValidators.cannotContainSpace
      ]
    ),
    password: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    )
  });

  get username() {
    return this.userForm.get('username');
  }

  get password() {
    return this.userForm.get('password');
  }
}
