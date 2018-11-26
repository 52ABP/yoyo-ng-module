import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DelonUtilModule } from 'yoyo-ng-module/src/util';
import { DelonLocaleModule } from 'yoyo-ng-module/src/theme';

import { G2ProgressComponent } from './mini-progress.component';

const COMPONENTS = [G2ProgressComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule, DelonLocaleModule, NgZorroAntdModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2MiniProgressModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: G2MiniProgressModule, providers: [] };
  }
}
