import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorCollectModule } from 'yoyo-ng-module/src/abc/error-collect';
import { DelonUtilModule } from 'yoyo-ng-module/src/util';

import { FooterToolbarComponent } from './footer-toolbar.component';

const COMPONENTS = [FooterToolbarComponent];

@NgModule({
  imports: [CommonModule, ErrorCollectModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class FooterToolbarModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: FooterToolbarModule, providers: [] };
  }
}
