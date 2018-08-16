import { PipeTransform, Pipe } from '@angular/core';
import { numberToChinese } from './number-to-chinese';

@Pipe({ name: 'n2c' })
export class NumberToChinesePipe implements PipeTransform {
  transform(
    value: number | string,
    rmb: boolean = true,
    minusSymbol: string = '负',
  ): string {
    return numberToChinese(value, rmb, { minusSymbol });
  }
}
