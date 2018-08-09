import {
  Component,
  Input,
  HostBinding,
  ViewChild,
  ElementRef,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
  NgZone,
} from '@angular/core';
import { toNumber } from '@delon/util';

@Component({
  selector: 'g2-mini-bar',
  template: `<div #container></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class G2MiniBarComponent implements OnDestroy, OnChanges {
  // region: fields

  @Input() color = '#1890FF';

  @HostBinding('style.height.px')
  @Input()
  get height() {
    return this._height;
  }
  set height(value: any) {
    this._height = toNumber(value);
  }
  private _height = 0;

  @Input()
  get borderWidth() {
    return this._borderWidth;
  }
  set borderWidth(value: any) {
    this._borderWidth = toNumber(value);
  }
  private _borderWidth = 5;

  @Input() padding: number[] = [8, 8, 8, 8];

  @Input() data: Array<{ x: number; y: number; [key: string]: any }>;

  // endregion

  @ViewChild('container') node: ElementRef;

  chart: any;

  constructor(private zone: NgZone) {
  }

  install() {
    if (!this.data || (this.data && this.data.length < 1)) return;

    this.node.nativeElement.innerHTML = '';

    const chart = new G2.Chart({
      container: this.node.nativeElement,
      forceFit: true,
      height: +this.height,
      padding: this.padding,
      legend: null,
    });

    chart.axis(false);

    chart.source(this.data, {
      x: {
        type: 'cat',
      },
      y: {
        min: 0,
      },
    });

    chart.tooltip({
      showTitle: false,
      hideMarkders: false,
      crosshairs: false,
      'g2-tooltip': { padding: 4 },
      'g2-tooltip-list-item': { margin: `0px 4px` },
    });
    chart
      .interval()
      .position('x*y')
      .size(this.borderWidth)
      .color(this.color)
      .tooltip('x*y', (x, y) => {
        return {
          name: x,
          value: y,
        };
      });

    chart.render();

    this.chart = chart;
  }

  uninstall() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.zone.runOutsideAngular(() => setTimeout(() => this.install(), 100));
  }

  ngOnDestroy(): void {
    this.uninstall();
  }
}
