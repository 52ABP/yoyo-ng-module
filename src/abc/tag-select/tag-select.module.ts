import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DelonLocaleModule } from 'yoyo-ng-module/src/theme';
import { DelonUtilModule } from 'yoyo-ng-module/src/util';

import { TagSelectComponent } from './tag-select.component';

const COMPONENTS = [TagSelectComponent];

@NgModule({
  imports: [CommonModule, NgZorroAntdModule, DelonLocaleModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class TagSelectModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: TagSelectModule, providers: [] };
  }
}
