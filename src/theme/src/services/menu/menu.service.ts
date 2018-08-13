import { PermissionCheckerService } from 'yoyo-ng-module/abp/auth/permission-checker.service';
import { Injectable, Inject, Optional, OnDestroy } from '@angular/core';
import { MenuItem } from './menu-item';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable()
export class MenuService implements OnDestroy {

    private data: MenuItem[] = [];
    private _change$: BehaviorSubject<MenuItem[]> = new BehaviorSubject<MenuItem[]>([]);
    /**
     * 构造函数
     * @param _permissionService 权限检测服务
     */
    constructor(
        private _permissionService: PermissionCheckerService
    ) {
    }

    set menus(items: MenuItem[]) {
        this.data = items;
    }

    get menus() {
        return this.data;
    }


    /**
     * 菜单权限检查
     * @param menuItem 菜单项
     */
    checkChildMenuItemPermission(menuItem: MenuItem): boolean {
        for (let i = 0; i < menuItem.items.length; i++) {
            let subMenuItem = menuItem.items[i];

            if (subMenuItem.permissionName && this._permissionService.isGranted(subMenuItem.permissionName)) {
                return true;
            }

            if (subMenuItem.items && subMenuItem.items.length) {
                return this.checkChildMenuItemPermission(subMenuItem);
            } else if (!subMenuItem.permissionName) {
                return true;
            }
        }
        return false;
    }

    /**
     * 清空菜单
     */
    clear() {
        this.data = [];
    }

    /**
     * 根据URL设置菜单 `_open` 属性
     * @param url URL地址
     */
    openedByUrl(url: string) {
        if (!url) return;
    }

    /**
     * 根据url获取菜单列表
     * @param url
     */
    getPathByUrl(url: string): MenuItem[] {
        let result: MenuItem[] = [];
        this.findMenuItem(url, this.data, result);

        result.reverse();

        return result;
    }

    private findMenuItem(url: string, items: MenuItem[], result: MenuItem[]): boolean {
        let item: MenuItem;
        for (let i = 0; i < items.length; i++) {
            item = items[i];
            if (item.items && item.items.length) {
                if (this.findMenuItem(url, item.items, result)) {
                    result.push(item);
                    return true;
                }
            }
            if (item.route === url || (!(item.items && item.items.length) && url.startsWith(item.route))) {
                result.push(item);
                return true;
            }
        }
    }

    /**
     * 获取当前菜单项
     * @param url 当前路由地址
     */
    getMenuByUrl(url: string) {
        const menus = this.getPathByUrl(url);
        if (!menus || menus.length === 0) return null;
        return menus.pop();
    }

    get change(): Observable<MenuItem[]> {
        return this._change$.pipe(share());
    }

    visit(callback: (item: MenuItem, parentMenum: MenuItem, depth?: number) => void) {
        const inFn = (list: MenuItem[], parentMenu: MenuItem, depth: number) => {
            for (const item of list) {
                callback(item, parentMenu, depth);
                if (item.items && item.items.length > 0) {
                    inFn(item.items, item, depth + 1);
                } else {
                    item.items = [];
                }
            }
        };

        inFn(this.data, null, 0);
    }

    ngOnDestroy(): void {
        this._change$.unsubscribe();
    }
}
