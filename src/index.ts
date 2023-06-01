import zhHansTranslation from './translations/zh-Hans.json';
import zhHantTranslation from './translations/zh-Hant.json';
import koTranslation from './translations/ko.json';
import { OptionalLanguageCode, SupportedLanguageCode } from './util/types';

export const defaultTranslation: Record<SupportedLanguageCode, Record<string, any>> & {
    [l in OptionalLanguageCode]?: Record<string, any>;
} = {
    en: {},
    'zh-Hans': zhHansTranslation,
    'zh-Hant': zhHantTranslation,
    ko: koTranslation,
};

export * from './util/types';
