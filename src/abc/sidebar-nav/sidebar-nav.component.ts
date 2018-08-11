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
  template:`
  <ul class="nav">
  <ng-container *ngFor="let group of list">
    <ng-template [ngIf]="group._hidden !== true">
      <li class="nav-group-title">
        <span>{{ group.text }}</span>
      </li>
      <ng-container *ngFor="let child1 of group.children">
        <li *ngIf="child1._hidden !== true" routerLinkActive="nav-item-selected" [routerLinkActiveOptions]="{exact: child1.linkExact}"
          [class.nav-submenu-open]="child1._open">
          <!-- link -->
          <a *ngIf="child1._type === 1" (click)="onSelect(child1)" [routerLink]="child1.link" [target]="child1.target">
            <i *ngIf="!settings.layout.collapsed" class="{{ child1.icon }}"></i>
            <nz-tooltip *ngIf="settings.layout.collapsed" nzPlacement="right" [nzTitle]="child1.text">
              <span nz-tooltip>
                <i class="{{ child1.icon }}"></i>
              </span>
            </nz-tooltip>
            <span>{{ child1.text }}</span>
          </a>
          <!-- external link -->
          <a *ngIf="child1._type === 2" href="{{ child1.externalLink }}" target="{{child1.target}}">
            <i *ngIf="!settings.layout.collapsed" class="{{ child1.icon }}"></i>
            <nz-tooltip *ngIf="settings.layout.collapsed" nzPlacement="right" [nzTitle]="child1.text">
              <span nz-tooltip>
                <i class="{{ child1.icon }}"></i>
              </span>
            </nz-tooltip>
            <span>{{ child1.text }}</span>
          </a>
          <!-- has children link -->
          <a *ngIf="child1._type === 3" class="nav-sub-title" (click)="toggleOpen(child1)" (mouseenter)="showSubMenu($event, child1)">
            <i class="{{ child1.icon }}"></i>
            <span>{{ child1.text }}</span>
          </a>
          <!-- badge -->
          <div *ngIf="child1.badge" title="{{child1.badge}}" class="badge badge-{{child1.badge_status}}" [class.badge-dot]="child1.badge_dot">
            <em>{{child1.badge}}</em>
          </div>
          <!-- Level 2 -->
          <ul *ngIf="child1._type === 3" class="nav nav-sub nav-depth{{child1._depth}}">
            <ng-container *ngFor="let child2 of child1.children">
              <li *ngIf="child2._hidden !== true" routerLinkActive="nav-item-selected" [routerLinkActiveOptions]="{exact: child2.linkExact}"
                [class.nav-submenu-open]="child2._open">
                <!-- link -->
                <a *ngIf="child2._type === 1" (click)="onSelect(child2)" [routerLink]="child2.link" [target]="child2.target">{{ child2.text }}</a>
                <!-- external link -->
                <a *ngIf="child2._type === 2" href="{{ child2.externalLink }}" target="{{ child2.target }}">{{ child2.text }}</a>
                <!-- has children link -->
                <a *ngIf="child2._type === 3" class="nav-sub-title" (click)="toggleOpen(child2)">
                  {{ child2.text }}
                </a>
                <!-- badge -->
                <div *ngIf="child2.badge" title="{{child2.badge}}" class="badge badge-{{child2.badge_status}}" [class.badge-dot]="child2.badge_dot">
                  <em>{{child2.badge}}</em>
                </div>
                <!-- Level 3 -->
                <ul *ngIf="child2._type === 3" class="nav nav-sub nav-depth{{child2._depth}}">
                  <ng-container *ngFor="let child3 of child2.children">
                    <li *ngIf="child3._hidden !== true" routerLinkActive="nav-item-selected" [routerLinkActiveOptions]="{exact: child3.linkExact}"
                      [class.nav-submenu-open]="child3._open">
                      <!-- link -->
                      <a *ngIf="child3._type === 1" (click)="onSelect(child3)" [routerLink]="child3.link" [target]="child3.target">{{ child3.text }}</a>
                      <!-- external link -->
                      <a *ngIf="child3._type === 2" href="{{ child3.externalLink }}" target="{{ child3.target }}">{{ child3.text }}</a>
                      <!-- badge -->
                      <div *ngIf="child3.badge" title="{{child3.badge}}" class="badge badge-{{child3.badge_status}}" [class.badge-dot]="child3.badge_dot">
                        <em>{{child3.badge}}</em>
                      </div>
                    </li>
                  </ng-container>
                </ul>
              </li>
            </ng-container>
          </ul>
        </li>
      </ng-container>
    </ng-template>
  </ng-container>
</ul>
  `,
  // templateUrl: './sidebar-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
})
export class SidebarNavComponent implements OnInit, OnDestroy {
  private rootEl: HTMLDivElement;
  /** @inner */
  floatingEl: HTMLDivElement;
  private bodyEl: HTMLBodyElement;
  list: Nav[] = [];
  private change$: Subscription;

  @Input() autoCloseUnderPad = true;

  @Output() select = new EventEmitter<MenuItem>();

  constructor(
    private menuSrv: MenuService,
    public settings: SettingsService,
    private router: Router,
    private locationStrategy: LocationStrategy,
    private render: Renderer2,
    private cd: ChangeDetectorRef,
    @Inject(DOCUMENT) private doc: any,
    el: ElementRef,
  ) {
    this.rootEl = el.nativeElement as HTMLDivElement;
  }

  ngOnInit() {
    this.bodyEl = this.doc.querySelector('body');
    this.menuSrv.openedByUrl(this.router.url);
    this.genFloatingContainer();
    this.change$ = <any>this.menuSrv.change.subscribe(res => {
      this.list = res;
      this.cd.detectChanges();
    });
    this.installUnderPad();
  }

  private floatingAreaClickHandle(e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    const linkNode = e.target as Element;
    if (linkNode.nodeName !== 'A') {
      return false;
    }
    let url: string = linkNode.getAttribute('href');
    if (url && url.startsWith('#')) {
      url = url.slice(1);
    }
    // 如果配置了bashHref 则去掉baseHref
    const baseHerf = this.locationStrategy.getBaseHref();
    if (baseHerf) {
      url = url.slice(baseHerf.length);
    }
    this.router.navigateByUrl(url);
    this.onSelect(this.menuSrv.getPathByUrl(url).pop());
    this.hideAll();
    return false;
  }

  clearFloatingContainer() {
    if (!this.floatingEl) return;
    this.floatingEl.removeEventListener(
      'click',
      this.floatingAreaClickHandle.bind(this),
    );
    // fix ie: https://github.com/cipchk/delon/issues/52
    if (this.floatingEl.hasOwnProperty('remove')) {
      this.floatingEl.remove();
    } else if (this.floatingEl.parentNode) {
      this.floatingEl.parentNode.removeChild(this.floatingEl);
    }
  }

  genFloatingContainer() {
    this.clearFloatingContainer();
    this.floatingEl = this.render.createElement('div');
    this.floatingEl.classList.add(FLOATINGCLS + '-container');
    this.floatingEl.addEventListener(
      'click',
      this.floatingAreaClickHandle.bind(this),
      false,
    );
    this.bodyEl.appendChild(this.floatingEl);
  }

  private genSubNode(linkNode: HTMLLinkElement, item: Nav): HTMLUListElement {
    const id = `_sidebar-nav-${item.__id}`;
    const node = linkNode.nextElementSibling.cloneNode(
      true,
    ) as HTMLUListElement;
    node.id = id;
    node.classList.add(FLOATINGCLS);
    node.addEventListener(
      'mouseleave',
      () => {
        node.classList.remove(SHOWCLS);
      },
      false,
    );
    this.floatingEl.appendChild(node);
    return node;
  }

  private hideAll() {
    const allNode = this.floatingEl.querySelectorAll('.' + FLOATINGCLS);
    for (let i = 0; i < allNode.length; i++) {
      allNode[i].classList.remove(SHOWCLS);
    }
  }

  // calculate the node position values.
  private calPos(linkNode: HTMLLinkElement, node: HTMLUListElement) {
    const rect = linkNode.getBoundingClientRect();
    // bug: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/14721015/
    const scrollTop = Math.max(
      this.doc.documentElement.scrollTop,
      this.bodyEl.scrollTop,
    );
    const docHeight = Math.max(
      this.doc.documentElement.clientHeight,
      this.bodyEl.clientHeight,
    );
    let offsetHeight = 0;
    if (docHeight < rect.top + node.clientHeight) {
      offsetHeight = rect.top + node.clientHeight - docHeight;
    }
    node.style.top = `${rect.top + scrollTop - offsetHeight}px`;
    node.style.left = `${rect.right + 5}px`;
  }

  showSubMenu(e: MouseEvent, item: Nav) {
    if (this.settings.layout.collapsed !== true) {
      return;
    }
    e.preventDefault();
    const linkNode = e.target as Element;
    this.genFloatingContainer();
    const subNode = this.genSubNode(linkNode as HTMLLinkElement, item);
    this.hideAll();
    subNode.classList.add(SHOWCLS);
    this.calPos(linkNode as HTMLLinkElement, subNode);
  }

  onSelect(item: MenuItem) {
    this.select.emit(item);
  }

  toggleOpen(item: Nav) {
    this.menuSrv.visit((i, p) => {
      if (i !== item) i.isDisplay = false;
    });
    let pItem = item.__parent;
    while (pItem) {
      pItem._open = true;
      pItem = pItem.__parent;
    }
    item._open = !item._open;
    this.cd.markForCheck();
  }

  @HostListener('document:click', ['$event.target'])
  onClick() {
    this.hideAll();
  }

  ngOnDestroy(): void {
    this.change$.unsubscribe();
    if (this.route$) this.route$.unsubscribe();
    this.clearFloatingContainer();
  }

  // region: Under pad

  private route$: Subscription;
  private installUnderPad() {
    if (!this.autoCloseUnderPad) return;
    this.route$ = <any>(
      this.router.events
        .pipe(filter(e => e instanceof NavigationEnd))
        .subscribe(s => this.underPad())
    );
    this.underPad();
  }

  private underPad() {
    if (window.innerWidth < 992 && !this.settings.layout.collapsed) {
      this.settings.setLayout('collapsed', true);
    }
  }

  // endregion
}
