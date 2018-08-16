import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownModule } from 'ngx-countdown';

import { CountDownComponent } from './count-down.component';

const COMPONENTS = [CountDownComponent];

@NgModule({
  imports: [CommonModule, CountdownModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class AdCountDownModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: AdCountDownModule, providers: [] };
  }
}
