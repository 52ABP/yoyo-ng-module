import { PermissionCheckerService } from '../abp';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WINDOW } from './win_tokens';



import { ModalHelper } from './services/modal/modal.helper';
const HELPERS = [ModalHelper, PermissionCheckerService];

// components
const COMPONENTS = [];

// pipes
import { DatePipe } from './pipes/date/date.pipe';
import { CNCurrencyPipe } from './pipes/currency/cn-currency.pipe';
import { KeysPipe } from './pipes/keys/keys.pipe';
import { YNPipe } from './pipes/yn/yn.pipe';

const PIPES = [DatePipe, CNCurrencyPipe, KeysPipe, YNPipe];

// endregion

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [...COMPONENTS, ...PIPES],
  exports: [...COMPONENTS, ...PIPES],
})
export class AlainThemeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AlainThemeModule,
      providers: [
        { provide: WINDOW, useValue: window },
        ...HELPERS,
      ],
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: AlainThemeModule,
      providers: [...HELPERS],
    };
  }
}
