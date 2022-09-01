import zhHansTranslation from './translations/zh-Hans.json';
import zhHantTranslation from './translations/zh-Hant.json';
import { Resource } from 'i18next';

const resources: Resource = {
    'zh-Hans': { translation: zhHansTranslation },
    'zh-Hant': { translation: zhHantTranslation },
};

const rmgTranslate = { resources };

export * from './util/types';
export default rmgTranslate;
