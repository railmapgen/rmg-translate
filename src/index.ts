import zhHansTranslations from './translations/zh-Hans.json';
import zhHantTranslations from './translations/zh-Hant.json';
import { Resource } from 'i18next';

const resources: Resource = {
    'zh-Hans': { translations: zhHansTranslations },
    'zh-Hant': { translations: zhHantTranslations },
};

const rmgTranslate = { resources };

export * from './util/types';
export default rmgTranslate;
