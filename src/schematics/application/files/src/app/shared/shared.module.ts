import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// delon
import { AlainThemeModule } from 'yoyo-ng-module/theme';
import { DelonABCModule } from 'yoyo-ng-module/abc';
import { DelonACLModule } from 'yoyo-ng-module/acl';
<% if (form) { %>import { DelonFormModule } from 'yoyo-ng-module/form';<% } %><% if (i18n) { %>
// i18n
import { TranslateModule } from '@ngx-translate/core';<% } %>

// region: third libs
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CountdownModule } from 'ngx-countdown';
const THIRDMODULES = [
  NgZorroAntdModule,
  CountdownModule
];
// endregion

// region: your componets & directives
const COMPONENTS = [];
const DIRECTIVES = [];
// endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AlainThemeModule.forChild(),
    DelonABCModule,
    DelonACLModule,<% if (form) { %>
    DelonFormModule,<% } %>
    // third libs
    ...THIRDMODULES
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AlainThemeModule,
    DelonABCModule,
    DelonACLModule,<% if (form) { %>
    DelonFormModule,<% } %><% if (i18n) { %>
    // i18n
    TranslateModule,<% } %>
    // third libs
    ...THIRDMODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES
  ]
})
export class SharedModule { }
