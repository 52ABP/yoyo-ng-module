// import { NgModule, ModuleWithProviders } from '@angular/core';

// // region: all modules
// import { AdErrorCollectModule } from './abc/error-collect/error-collect.module';
// import { AdFooterToolbarModule } from './abc/footer-toolbar/footer-toolbar.module';
// import { AdSidebarNavModule } from './abc/sidebar-nav/sidebar-nav.module';
// import { AdDownFileModule } from './abc/down-file/down-file.module';
// import { AdImageModule } from './abc/image/image.module';
// import { AdAvatarListModule } from './abc/avatar-list/avatar-list.module';
// import { AdDescListModule } from './abc/desc-list/desc-list.module';
// import { AdEllipsisModule } from './abc/ellipsis/ellipsis.module';
// import { AdGlobalFooterModule } from './abc/global-footer/global-footer.module';
// import { AdExceptionModule } from './abc/exception/exception.module';
// import { AdNoticeIconModule } from './abc/notice-icon/notice-icon.module';
// import { AdNumberInfoModule } from './abc/number-info/number-info.module';
// import { AdPageHeaderModule } from './abc/page-header/page-header.module';
// import { AdResultModule } from './abc/result/result.module';
// import { AdStandardFormRowModule } from './abc/standard-form-row/standard-form-row.module';
// import { AdTagSelectModule } from './abc/tag-select/tag-select.module';
// import { AdTrendModule } from './abc/trend/trend.module';
// import { AdCountDownModule } from './abc/count-down/count-down.module';
// import { AdSimpleTableModule } from './abc/simple-table/simple-table.module';
// import { AdReuseTabModule } from './abc/reuse-tab/reuse-tab.module';
// import { AdFullContentModule } from './abc/full-content/full-content.module';
// import { AdXlsxModule } from './abc/xlsx/xlsx.module';
// import { AdZipModule } from './abc/zip/zip.module';
// import { AdNumberToChineseModule } from './abc/number-to-chinese/number-to-chinese.module';
// import { AdLodopModule } from './abc/lodop/lodop.module';
// import { AdQuickMenuModule } from './abc/quick-menu/quick-menu.module';
// import { AdQRModule } from './abc/qr/qr.module';
// import { AdSHFModule } from './abc/simple-html-form/module';
// // charts
// import { AdG2BarModule } from './abc/charts/bar/bar.module';
// import { AdG2CardModule } from './abc/charts/card/card.module';
// import { AdG2ChartModule } from './abc/charts/chart/chart.module';
// import { AdG2GaugeModule } from './abc/charts/gauge/gauge.module';
// import { AdG2MiniAreaModule } from './abc/charts/mini-area/mini-area.module';
// import { AdG2MiniBarModule } from './abc/charts/mini-bar/mini-bar.module';
// import { AdG2MiniProgressModule } from './abc/charts/mini-progress/mini-progress.module';
// import { AdG2PieModule } from './abc/charts/pie/pie.module';
// import { AdG2RadarModule } from './abc/charts/radar/radar.module';
// import { AdG2TagCloudModule } from './abc/charts/tag-cloud/tag-cloud.module';
// import { AdG2TimelineModule } from './abc/charts/timeline/timeline.module';
// import { AdG2WaterWaveModule } from './abc/charts/water-wave/water-wave.module';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

// const MODULES = [
//     AdErrorCollectModule,
//     AdFooterToolbarModule,
//     AdSidebarNavModule,
//     AdDownFileModule,
//     AdImageModule,
//     AdAvatarListModule,
//     AdDescListModule,
//     AdEllipsisModule,
//     AdGlobalFooterModule,
//     AdExceptionModule,
//     AdNoticeIconModule,
//     AdNumberInfoModule,
//     AdPageHeaderModule,
//     AdResultModule,
//     AdStandardFormRowModule,
//     AdTagSelectModule,
//     AdTrendModule,
//     AdCountDownModule,
//     AdSimpleTableModule,
//     AdReuseTabModule,
//     AdFullContentModule,
//     AdXlsxModule,
//     AdZipModule,
//     AdNumberToChineseModule,
//     AdLodopModule,
//     AdQuickMenuModule,
//     AdQRModule,
//     AdSHFModule,
//     // charts
//     AdG2BarModule,
//     AdG2CardModule,
//     AdG2ChartModule,
//     AdG2GaugeModule,
//     AdG2MiniAreaModule,
//     AdG2MiniBarModule,
//     AdG2MiniProgressModule,
//     AdG2PieModule,
//     AdG2RadarModule,
//     AdG2TagCloudModule,
//     AdG2TimelineModule,
//     AdG2WaterWaveModule,
// ];

// //
// import { ModalHelper } from './theme/services/modal/modal.helper';
// const HELPERS = [ModalHelper];

// // pipes
// import { DatePipe } from './theme/pipes/date/date.pipe';
// import { CNCurrencyPipe } from './theme/pipes/currency/cn-currency.pipe';
// import { KeysPipe } from './theme/pipes/keys/keys.pipe';
// import { YNPipe } from './theme/pipes/yn/yn.pipe';
// import { WINDOW } from './theme/win_tokens';
// import { ALAIN_I18N_TOKEN, AlainI18NServiceFake } from './theme/services/i18n/i18n';
// import { YoyoCacheConfig } from './cache/cache.config';
// import { CacheService } from './cache/cache.service';
// import { DC_STORE_STORAGE_TOKEN } from './cache/interface';
// import { LocalStorageCacheService } from './cache/local-storage-cache.service';
// const PIPES = [DatePipe, CNCurrencyPipe, KeysPipe, YNPipe];

// // endregion

// @NgModule({
//     imports: [
//         AdErrorCollectModule.forRoot(),
//         AdFooterToolbarModule.forRoot(),
//         AdSidebarNavModule.forRoot(),
//         AdDownFileModule.forRoot(),
//         AdImageModule.forRoot(),
//         AdAvatarListModule.forRoot(),
//         AdDescListModule.forRoot(),
//         AdEllipsisModule.forRoot(),
//         AdExceptionModule.forRoot(),
//         AdExceptionModule.forRoot(),
//         AdNoticeIconModule.forRoot(),
//         AdNumberInfoModule.forRoot(),
//         AdPageHeaderModule.forRoot(),
//         AdResultModule.forRoot(),
//         AdStandardFormRowModule.forRoot(),
//         AdTagSelectModule.forRoot(),
//         AdTrendModule.forRoot(),
//         AdCountDownModule.forRoot(),
//         AdSimpleTableModule.forRoot(),
//         AdReuseTabModule.forRoot(),
//         AdFullContentModule.forRoot(),
//         AdXlsxModule.forRoot(),
//         AdZipModule.forRoot(),
//         AdNumberToChineseModule.forRoot(),
//         AdLodopModule.forRoot(),
//         AdQuickMenuModule.forRoot(),
//         AdQRModule.forRoot(),
//         AdSHFModule.forRoot(),
//         // charts
//         AdG2BarModule.forRoot(),
//         AdG2CardModule.forRoot(),
//         AdG2ChartModule.forRoot(),
//         AdG2GaugeModule.forRoot(),
//         AdG2MiniAreaModule.forRoot(),
//         AdG2MiniBarModule.forRoot(),
//         AdG2MiniProgressModule.forRoot(),
//         AdG2PieModule.forRoot(),
//         AdG2RadarModule.forRoot(),
//         AdG2TagCloudModule.forRoot(),
//         AdG2TimelineModule.forRoot(),
//         AdG2WaterWaveModule.forRoot(),
//         CommonModule,
//         RouterModule,
//     ],
//     exports: [
//         ...PIPES,
//         ...MODULES
//     ],
// })
// export class YoyoRootModule { }

// @NgModule({
//     exports: [
//         ...MODULES
//     ]
// })
// export class YoyoModule {
//     static forRoot(yoyoCacheConfig?: YoyoCacheConfig): ModuleWithProviders {
//         return {
//             ngModule: YoyoRootModule,
//             providers: [
//                 YoyoCacheConfig,
//                 CacheService,
//                 { provide: WINDOW, useValue: window },
//                 { provide: ALAIN_I18N_TOKEN, useClass: AlainI18NServiceFake },
//                 { provide: DC_STORE_STORAGE_TOKEN, useClass: LocalStorageCacheService },
//                 ...HELPERS,
//               ],
//         };
//     }
//     static forChild(): ModuleWithProviders {
//         return {
//             ngModule: YoyoRootModule,
//             providers: [...HELPERS],
//         };
//     }
// }
import { NgModule, ModuleWithProviders } from '@angular/core';
@NgModule({
    exports: [

    ]
})
export class YoyoModule {}
