import {AbstractControl, ValidationErrors} from '@angular/forms';

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return {cannotContainSpace: true};
      // posso anche ritornare un oggetto complesso (ad esm se voglio più dettagli)
      // return {
      //   minlength: {
      //     requiredLength: 10,
      //     actualLength: control.value.length
      //   }
      // };
    }
    return null;
  }
}
