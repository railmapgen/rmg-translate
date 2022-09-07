import zhHansTranslation from './translations/zh-Hans.json';
import zhHantTranslation from './translations/zh-Hant.json';
import { Resource } from 'i18next';

const resources: Resource = {
    'zh-Hans': { translation: zhHansTranslation },
    'zh-Hant': { translation: zhHantTranslation },
};

const enrichResources = (resources: Resource, lang: string, additionalResource: { [key: string]: any }) => {
    if (lang in resources) {
        resources[lang].translation = {
            ...(resources[lang].translation as { [key: string]: any }),
            ...additionalResource,
        };
    } else {
        resources[lang].translation = { ...additionalResource };
    }
};

const rmgTranslate = { resources, enrichResources };

export * from './util/types';
export default rmgTranslate;
