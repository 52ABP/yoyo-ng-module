import {
  Component,
  Input,
  HostListener,
  OnInit,
  OnChanges,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Renderer2,
  ElementRef,
  TemplateRef,
} from '@angular/core';

import { InputNumber } from 'yoyo-ng-module/src/util';

@Component({
  selector: 'quick-menu',
  templateUrl: './quick-menu.component.html',
  host: { '[class.quick-menu]': 'true' },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickMenuComponent implements OnInit, OnChanges {
  // #region fields

  _icon = 'question-circle';
  _iconTpl: TemplateRef<any>;
  @Input()
  set icon(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this._icon = null;
      this._iconTpl = value;
    } else {
      this._icon = value;
    }
  }

  @Input() @InputNumber() top = 120;

  @Input() @InputNumber() width = 200;

  @Input() bgColor = '#fff';

  @Input() borderColor = '#ddd';

  // #endregion

  constructor(
    private cd: ChangeDetectorRef,
    private el: ElementRef,
    private render: Renderer2,
  ) {}

  private show = false;

  @HostListener('click')
  _click() {
    this.show = !this.show;
    this.setStyle();
  }

  ctrlStyle: { [key: string]: string } = {};
  private setStyle() {
    this.ctrlStyle = {
      'background-color': this.bgColor,
      'border-color': this.borderColor,
    };

    const res: string[] = [
      `top:${this.top}px`,
      `width:${this.width}px`,
      `background-color:${this.bgColor}`,
      `border-color:${this.borderColor}`,
      `margin-right:-${this.show ? 0 : this.width}px`,
    ];
    this.render.setAttribute(this.el.nativeElement, 'style', res.join(';'));
    this.cd.detectChanges();
  }

  private initFlag = false;
  ngOnInit(): void {
    this.initFlag = true;
    this.setStyle();
  }
  ngOnChanges(): void {
    if (this.initFlag) this.setStyle();
  }
}
