import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelonUtilModule } from 'yoyo-ng-module/src/util';

import { ZipService } from './zip.service';
import { ZipConfig } from './zip.config';

@NgModule({
  imports: [CommonModule, DelonUtilModule],
})
export class ZipModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ZipModule,
      providers: [ZipConfig, ZipService],
    };
  }
}
