import zhHansTranslation from './translations/zh-Hans.json';
import zhHantTranslation from './translations/zh-Hant.json';
import jaTranslation from './translations/ja.json';
import koTranslation from './translations/ko.json';
import { OptionalLanguageCode, SupportedLanguageCode } from './util/types';

export const defaultTranslation: Record<SupportedLanguageCode, Record<string, never>> & {
    [l in OptionalLanguageCode]?: Record<string, never>;
} = {
    en: {},
    'zh-Hans': zhHansTranslation as never,
    'zh-Hant': zhHantTranslation as never,
    ja: jaTranslation as never,
    ko: koTranslation as never,
};

export * from './util/types';
