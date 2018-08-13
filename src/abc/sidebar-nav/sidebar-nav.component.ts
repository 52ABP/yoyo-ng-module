import {
  Component,
  ElementRef,
  Renderer2,
  Inject,
  OnInit,
  OnDestroy,
  HostListener,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT, LocationStrategy } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MenuService, SettingsService, MenuItem } from 'yoyo-ng-module/theme';

import { Nav } from './interface';

const SHOWCLS = 'nav-floating-show';
const FLOATINGCLS = 'nav-floating';

@Component({
  selector: 'sidebar-nav',
  template: `
  <ul nz-menu [nzMode]="'inline'" [nzInlineCollapsed]="settings.layout.collapsed" id="left_menu_ul">
  <ng-template ngFor let-menuItem [ngForOf]="menuService.menus" let-mainMenuItemIndex="index">
    <li *ngIf="!hasChildren(menuItem)&&menuItem.isDisplay" nz-menu-item routerLinkActive="ant-menu-item-selected">
      <a [routerLink]="[menuItem.route]">
        <i *ngIf="menuItem.icon" class="{{menuItem.icon}}"></i>
        <span>{{menuItem.name}}</span>
      </a>
    </li>

    <li *ngIf="hasChildren(menuItem)&&menuItem.isDisplay" nz-submenu>
      <span title>
        <i *ngIf="menuItem.icon" class="{{menuItem.icon}}"></i>
        <span>{{menuItem.name}}</span>
      </span>
      <ul>
        <ng-template ngFor let-subMenuItem [ngForOf]="menuItem.items" let-mainMenuItemIndex="index">
          <li *ngIf="!hasChildren(subMenuItem)&&subMenuItem.isDisplay" nz-menu-item>
            <a [routerLink]="[subMenuItem.route]">
              <i *ngIf="subMenuItem.icon" class="{{subMenuItem.icon}}"></i>
              <span>{{subMenuItem.name}}</span>
            </a>
          </li>

          <li *ngIf="hasChildren(subMenuItem)&&subMenuItem.isDisplay" nz-submenu>
            <span title>
              <i *ngIf="subMenuItem.icon" class="{{subMenuItem.icon}}"></i>
              <span>{{subMenuItem.name}}</span>
            </span>

            <ul>
              <ng-template ngFor let-subSubMenuItem [ngForOf]="subMenuItem.items" let-mainMenuItemIndex="index">
                <li *ngIf="!hasChildren(subSubMenuItem)&&subSubMenuItem.isDisplay" nz-menu-item
                  routerLinkActive="ant-menu-item-selected">
                  <a [routerLink]="[subSubMenuItem.route]">
                    <i *ngIf="subSubMenuItem.icon" class="{{subSubMenuItem.icon}}"></i>
                    <span>{{subSubMenuItem.name}}</span>
                  </a>
                </li>
              </ng-template>
            </ul>
          </li>
        </ng-template>
      </ul>
    </li>
  </ng-template>
</ul>

  `,
  // templateUrl: './sidebar-nav.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  preserveWhitespaces: false,
})
export class SidebarNavComponent implements OnInit {
  collapsed: boolean = false;

  constructor(
    public menuService: MenuService,
    public settings: SettingsService
  ) {
  }

  ngOnInit() {

  }

  hasChildren(item: MenuItem): boolean {
    if (item.items) {
      return true;
    }
    return false;
  }
}
