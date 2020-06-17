import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'customSummary'
})
export class CustomSummaryPipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    if (!value) {
      return null;
    }

    return value.substring(0, 20) + '... ';
  }

}
