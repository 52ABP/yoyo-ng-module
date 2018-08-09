import {
  Component,
  TemplateRef,
  Input,
  ElementRef,
  Renderer2,
  OnChanges,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { toNumber } from '@delon/util';

@Component({
  selector: 'number-info',
  template: `
  <div *ngIf="_title || _titleTpl" class="title"><ng-container *ngIf="_title; else _titleTpl">{{_title}}</ng-container></div>
  <div *ngIf="_subTitle || _subTitleTpl" class="sub-title"><ng-container *ngIf="_subTitle; else _subTitleTpl">{{_subTitle}}</ng-container></div>
  <div class="value" [ngStyle]="{'margin-top.px': gap}">
    <span><ng-container *ngIf="_total; else _totalTpl">{{_total}}</ng-container><em class="suffix" *ngIf="suffix">{{suffix}}</em></span>
    <span *ngIf="status || _isSubTotal" class="sub-total">
      <ng-container *ngIf="_subTotal; else _subTotalTpl">{{_subTotal}}</ng-container>
      <i *ngIf="status" class="anticon anticon-caret-{{status}}"></i>
    </span>
  </div>
  `,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberInfoComponent implements OnChanges {
  _title = '';
  _titleTpl: TemplateRef<any>;
  /** 标题 */
  @Input()
  set title(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this._title = null;
      this._titleTpl = value;
    } else this._title = value;
  }

  _subTitle = '';
  _subTitleTpl: TemplateRef<any>;
  /** 子标题 */
  @Input()
  set subTitle(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this._subTitle = null;
      this._subTitleTpl = value;
    } else this._subTitle = value;
  }

  _total = '';
  _totalTpl: TemplateRef<any>;
  /** 总量 */
  @Input()
  set total(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this._total = null;
      this._totalTpl = value;
    } else this._total = '' + value;
  }

  _isSubTotal = false;
  _subTotal = '';
  _subTotalTpl: TemplateRef<any>;
  /** 总量后缀 */
  @Input()
  set subTotal(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this._subTotal = null;
      this._subTotalTpl = value;
    } else this._subTotal = value;

    this._isSubTotal = !!value;
  }

  /** 子总量 */
  @Input() suffix: string;

  /** 增加状态 */
  @Input() status: 'up' | 'down';

  /** 状态样式 */
  @Input() theme: 'light' | '' = 'light';

  /** 设置数字和描述直接的间距（像素） */
  @Input()
  get gap() {
    return this._gap;
  }
  set gap(value: any) {
    this._gap = toNumber(value);
  }
  private _gap = 8;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private cd: ChangeDetectorRef,
  ) {}

  _classMap: string[] = [];
  setClass() {
    this._classMap.forEach(cls =>
      this.renderer.removeClass(this.el.nativeElement, cls),
    );
    this._classMap = ['ad-number-info'];
    if (this.theme) this._classMap.push(this.theme);
    this._classMap.forEach(cls =>
      this.renderer.addClass(this.el.nativeElement, cls),
    );
    this.cd.detectChanges();
  }

  ngOnChanges(): void {
    this.setClass();
  }
}
