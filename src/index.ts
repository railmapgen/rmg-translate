import zhHansTranslation from './translations/zh-Hans.json';
import zhHantTranslation from './translations/zh-Hant.json';
import jaTranslation from './translations/ja.json';
import koTranslation from './translations/ko.json';
import { OptionalLanguageCode, SupportedLanguageCode } from './util/types';

export const defaultTranslation: Record<SupportedLanguageCode, Record<string, unknown>> & {
    [l in OptionalLanguageCode]?: Record<string, unknown>;
} = {
    en: {},
    'zh-Hans': zhHansTranslation,
    'zh-Hant': zhHantTranslation,
    ja: jaTranslation,
    ko: koTranslation,
};

export * from './util/types';
