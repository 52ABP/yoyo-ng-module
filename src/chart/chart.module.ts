import { NgModule, ModuleWithProviders } from '@angular/core';

// #region all modules

import { G2BarModule } from 'yoyo-ng-module/src/chart/bar';
import { G2CardModule } from 'yoyo-ng-module/src/chart/card';
import { G2CustomModule } from 'yoyo-ng-module/src/chart/custom';
import { G2GaugeModule } from 'yoyo-ng-module/src/chart/gauge';
import { G2MiniAreaModule } from 'yoyo-ng-module/src/chart/mini-area';
import { G2MiniBarModule } from 'yoyo-ng-module/src/chart/mini-bar';
import { G2MiniProgressModule } from 'yoyo-ng-module/src/chart/mini-progress';
import { G2PieModule } from 'yoyo-ng-module/src/chart/pie';
import { G2RadarModule } from 'yoyo-ng-module/src/chart/radar';
import { G2TagCloudModule } from 'yoyo-ng-module/src/chart/tag-cloud';
import { G2TimelineModule } from 'yoyo-ng-module/src/chart/timeline';
import { G2WaterWaveModule } from 'yoyo-ng-module/src/chart/water-wave';
import { NumberInfoModule } from 'yoyo-ng-module/src/chart/number-info';
import { TrendModule } from 'yoyo-ng-module/src/chart/trend';

const MODULES = [
  G2BarModule,
  G2CardModule,
  G2CustomModule,
  G2GaugeModule,
  G2MiniAreaModule,
  G2MiniBarModule,
  G2MiniProgressModule,
  G2PieModule,
  G2RadarModule,
  G2TagCloudModule,
  G2TimelineModule,
  G2WaterWaveModule,
  NumberInfoModule,
  TrendModule,
];

// #endregion

@NgModule({
  imports: [
    G2BarModule.forRoot(),
    G2CardModule.forRoot(),
    G2CustomModule.forRoot(),
    G2GaugeModule.forRoot(),
    G2MiniAreaModule.forRoot(),
    G2MiniBarModule.forRoot(),
    G2MiniProgressModule.forRoot(),
    G2PieModule.forRoot(),
    G2RadarModule.forRoot(),
    G2TagCloudModule.forRoot(),
    G2TimelineModule.forRoot(),
    G2WaterWaveModule.forRoot(),
    NumberInfoModule.forRoot(),
    TrendModule.forRoot(),
  ],
  exports: MODULES,
})
export class DelonChartRootModule {}

@NgModule({ exports: MODULES })
export class DelonChartModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: DelonChartRootModule };
  }
}
