import { Component, Input } from '@angular/core';
import { toNumber } from '@delon/util';

@Component({
  selector: 'g2-mini-progress',
  template: `
  <nz-tooltip [nzTitle]="'目标值: ' + target + '%'">
    <div nz-tooltip class="target" [ngStyle]="{'left.%': target}">
      <span [ngStyle]="{'background-color': color}"></span>
      <span [ngStyle]="{'background-color': color}"></span>
    </div>
  </nz-tooltip>
  <div class="progress-wrap">
    <div class="progress" [ngStyle]="{'background-color': color, 'width.%': percent, 'height.px':strokeWidth}"></div>
  </div>
  `,
  host: { '[class.ad-g2-progress]': 'true' },
  preserveWhitespaces: false,
})
export class G2ProgressComponent {
  // region: fields

  @Input() color = '#1890FF';

  @Input()
  get target() {
    return this._target;
  }
  set target(value: any) {
    this._target = Math.min(Math.max(toNumber(value), 0), 100);
  }
  private _target: number;

  @Input()
  get strokeWidth() {
    return this._strokeWidth;
  }
  set strokeWidth(value: any) {
    this._strokeWidth = toNumber(value);
  }
  private _strokeWidth: number;

  @Input()
  get percent() {
    return this._percent;
  }
  set percent(value: any) {
    this._percent = Math.min(Math.max(toNumber(value), 0), 100);
  }
  private _percent: number;

  // endregion
}
