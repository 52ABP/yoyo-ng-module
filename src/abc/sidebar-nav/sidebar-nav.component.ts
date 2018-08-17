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
import { MenuService, SettingsService, MenuItem } from '../../theme';

import { Nav } from './interface';
import { ReuseTabService } from '../../abc';

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

    <li *ngIf="hasChildren(menuItem)&&menuItem.isDisplay" nz-submenu [nzOpen]="menuItem.isOpen">
      <span title>
        <i *ngIf="menuItem.icon" class="{{menuItem.icon}}"></i>
        <span>{{menuItem.name}}</span>
      </span>
      <ul>
        <ng-template ngFor let-subMenuItem [ngForOf]="menuItem.items" let-mainMenuItemIndex="index">
          <li *ngIf="!hasChildren(subMenuItem)&&subMenuItem.isDisplay" nz-menu-item routerLinkActive="ant-menu-item-selected">
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
                <li *ngIf="!hasChildren(subSubMenuItem)&&subSubMenuItem.isDisplay" nz-menu-item routerLinkActive="ant-menu-item-selected">
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
export class SidebarNavComponent {

  // menu 展示数组
  public openMap: any = [];
  // mapKeys = [];
  // mapVals = [];

  constructor(
    public menuService: MenuService,
    public settings: SettingsService,
    public reuseTabService: ReuseTabService
  ) {
    this.processMenuOpen(reuseTabService.curUrl, this.menuService.menus);
  }

  hasChildren(item: MenuItem): boolean {
    if (item.items) {
      return true;
    }
    return false;
  }

  /**
   * 处理菜单展开状态
   */
  processMenuOpen(currentUrl: string, menus: MenuItem[], parentMenu?: MenuItem): void {
    menus.forEach(item => {
      if (parentMenu && item.route === currentUrl) {
        parentMenu.isOpen = true;
      }
      if (item.items && item.items.length > 0) {
        this.processMenuOpen(currentUrl, item.items, item);
      }
    });
  }

}
