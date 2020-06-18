import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor() {
  }

  @HostBinding('style.background-color')
  private backgroudColor: string;

  @HostBinding('style.color')
  private textColor: string;

  @HostListener('mouseover')
  onMouseOver() {
    this.backgroudColor = 'red';
    this.textColor = '#F6F5FA';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroudColor = '';
    this.textColor = '';
  }
}
