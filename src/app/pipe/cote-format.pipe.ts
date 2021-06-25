import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coteFormat'
})
export class CoteFormatPipe implements PipeTransform {

  transform(value: number): number {
    return value/100;
  }

}