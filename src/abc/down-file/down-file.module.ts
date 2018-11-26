import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlainThemeModule } from 'yoyo-ng-module/src/theme';

import { DownFileDirective } from './down-file.directive';

const DIRECTIVES = [DownFileDirective];

@NgModule({
  imports: [CommonModule, AlainThemeModule],
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
})
export class DownFileModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: DownFileModule, providers: [] };
  }
}
