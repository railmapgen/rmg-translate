import zhHansTranslation from './translations/zh-Hans.json';
import zhHantTranslation from './translations/zh-Hant.json';
import koTranslation from './translations/ko.json';
import { SupportedLanguageCode } from './util/types';

export const defaultTranslation: Record<SupportedLanguageCode, Record<string, any>> = {
    en: {},
    ko: koTranslation,
    'zh-Hans': zhHansTranslation,
    'zh-Hant': zhHantTranslation,
};

export * from './util/types';
