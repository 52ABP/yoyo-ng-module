import { Injectable, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { en_US, zh_CN, NzI18nService } from 'ng-zorro-antd';
import { AlainI18NService } from '@delon/theme';
import { ENUS } from './en-US';
import { ZHCN } from './zh-CN';

export type LangType = 'en-US' | 'zh-CN';

@Injectable()
export class I18NService implements AlainI18NService {

    change: EventEmitter<LangType> = new EventEmitter<LangType>();
    private _langs = [
        { code: 'en-US', text: 'English' },
        { code: 'zh-CN', text: '中文' }
    ];

    constructor(private nzLocalService: NzI18nService, private translate: TranslateService) {
        this.translate.setTranslation('en-US', ENUS);
        this.translate.setTranslation('zh-CN', ZHCN);
        this.translate.setDefaultLang('en-US');
    }

    use(lang: LangType) {
        this.translate.use(lang);
        this.nzLocalService.setLocale(lang === 'en-US' ? en_US : zh_CN);
        this.change.emit(lang);
    }

    getLangs(): any[] {
        return this._langs;
    }

    get defaultLang(): LangType {
        return 'zh-CN';
    }

    get lang() {
        return this.translate.currentLang;
    }

    get langs() {
        return ['zh-CN', 'en-US'];
    }

    get isZh() {
        return this.lang === 'zh-CN';
    }

    fanyi(key: string) {
        return this.translate.instant(key);
    }

    get(i: any) {
        return typeof i === 'string' ? i : i[this.lang] || i[this.defaultLang] || '';
    }
}
