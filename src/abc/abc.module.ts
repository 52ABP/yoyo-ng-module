import { NgModule, ModuleWithProviders } from '@angular/core';

// #region all modules
import { STModule } from 'yoyo-ng-module/src/abc/table';
import { SVModule } from 'yoyo-ng-module/src/abc/view';
import { SEModule } from 'yoyo-ng-module/src/abc/edit';
import { ErrorCollectModule } from 'yoyo-ng-module/src/abc/error-collect';
import { FooterToolbarModule } from 'yoyo-ng-module/src/abc/footer-toolbar';
import { SidebarNavModule } from 'yoyo-ng-module/src/abc/sidebar-nav';
import { DownFileModule } from 'yoyo-ng-module/src/abc/down-file';
import { ImageModule } from 'yoyo-ng-module/src/abc/image';
import { AvatarListModule } from 'yoyo-ng-module/src/abc/avatar-list';
import { EllipsisModule } from 'yoyo-ng-module/src/abc/ellipsis';
import { GlobalFooterModule } from 'yoyo-ng-module/src/abc/global-footer';
import { ExceptionModule } from 'yoyo-ng-module/src/abc/exception';
import { NoticeIconModule } from 'yoyo-ng-module/src/abc/notice-icon';
import { PageHeaderModule } from 'yoyo-ng-module/src/abc/page-header';
import { ResultModule } from 'yoyo-ng-module/src/abc/result';
import { TagSelectModule } from 'yoyo-ng-module/src/abc/tag-select';
import { CountDownModule } from 'yoyo-ng-module/src/abc/count-down';
import { ReuseTabModule } from 'yoyo-ng-module/src/abc/reuse-tab';
import { FullContentModule } from 'yoyo-ng-module/src/abc/full-content';
import { XlsxModule } from 'yoyo-ng-module/src/abc/xlsx';
import { ZipModule } from 'yoyo-ng-module/src/abc/zip';
import { NumberToChineseModule } from 'yoyo-ng-module/src/abc/number-to-chinese';
import { LodopModule } from 'yoyo-ng-module/src/abc/lodop';
import { QuickMenuModule } from 'yoyo-ng-module/src/abc/quick-menu';
import { QRModule } from 'yoyo-ng-module/src/abc/qr';
import { DatePickerModule } from 'yoyo-ng-module/src/abc/date-picker';
import { SGModule } from 'yoyo-ng-module/src/abc/grid';

const MODULES = [
  ErrorCollectModule,
  FooterToolbarModule,
  SidebarNavModule,
  DownFileModule,
  ImageModule,
  AvatarListModule,
  EllipsisModule,
  GlobalFooterModule,
  ExceptionModule,
  NoticeIconModule,
  PageHeaderModule,
  ResultModule,
  TagSelectModule,
  CountDownModule,
  STModule,
  ReuseTabModule,
  FullContentModule,
  XlsxModule,
  ZipModule,
  NumberToChineseModule,
  LodopModule,
  QuickMenuModule,
  QRModule,
  SVModule,
  SEModule,
  SGModule,
  DatePickerModule,
];

// #endregion

@NgModule({
  imports: [
    ErrorCollectModule.forRoot(),
    FooterToolbarModule.forRoot(),
    SidebarNavModule.forRoot(),
    DownFileModule.forRoot(),
    ImageModule.forRoot(),
    AvatarListModule.forRoot(),
    EllipsisModule.forRoot(),
    ExceptionModule.forRoot(),
    ExceptionModule.forRoot(),
    NoticeIconModule.forRoot(),
    PageHeaderModule.forRoot(),
    ResultModule.forRoot(),
    TagSelectModule.forRoot(),
    CountDownModule.forRoot(),
    STModule.forRoot(),
    ReuseTabModule.forRoot(),
    FullContentModule.forRoot(),
    XlsxModule.forRoot(),
    ZipModule.forRoot(),
    NumberToChineseModule.forRoot(),
    LodopModule.forRoot(),
    QuickMenuModule.forRoot(),
    QRModule.forRoot(),
    SVModule.forRoot(),
    SEModule.forRoot(),
    SGModule.forRoot(),
    DatePickerModule.forRoot(),
  ],
  exports: MODULES,
})
export class DelonABCRootModule {}

@NgModule({ exports: MODULES })
export class DelonABCModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: DelonABCRootModule };
  }
}
