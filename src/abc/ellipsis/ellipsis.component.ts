import {
  Component,
  Input,
  HostBinding,
  Renderer2,
  ElementRef,
} from '@angular/core';
import { InputNumber } from 'yoyo-ng-module/src/util';

@Component({
  selector: 'ellipsis',
  template: `<ng-content></ng-content>`,
  host: { '[class.ellipsis]': 'true' },
})
export class EllipsisComponent {
  /** 在按照行数截取下最大的行数，超过则截取省略 */
  @Input()
  @InputNumber()
  @HostBinding('style.-webkit-line-clamp')
  lines = 3;

  constructor(el: ElementRef, render: Renderer2) {
    render.setStyle(el.nativeElement, '-webkit-box-orient', 'vertical');
  }
}
