import { Injectable } from '@angular/core';

@Injectable()
export class LocalizationService {

    /**
    * 默认的语言Source名称
    */
    static localizationSourceName: string = '';

    get languages(): abp.localization.ILanguageInfo[] {
        return abp.localization.languages;
    }

    get currentLanguage(): abp.localization.ILanguageInfo {
        return abp.localization.currentLanguage;
    }

    localize(key: string, sourceName: string): string {
        return abp.localization.localize(key, sourceName);
    }

    getSource(sourceName: string): (key: string) => string {
        return abp.localization.getSource(sourceName);
    }

    l(key: string, ...args: any[]): string {
        let localizedText = this.localize(
            key,
            LocalizationService.localizationSourceName,
        );

        if (!localizedText) {
            localizedText = key;
        }

        if (!args || !args.length) {
            return localizedText;
        }

        args.unshift(localizedText);
        return abp.utils.formatString.apply(this, args);
    }
}