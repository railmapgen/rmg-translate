import zhHansTranslation from './translations/zh-Hans.json';
import zhHantTranslation from './translations/zh-Hant.json';
import { Resource } from 'i18next';

class Builder {
    private readonly _resources: Resource;

    constructor() {
        this._resources = {
            'zh-Hans': { translation: zhHansTranslation },
            'zh-Hant': { translation: zhHantTranslation },
        };
    }

    withResource(lang: string, additionalResource: { [key: string]: any }) {
        if (lang in this._resources) {
            this._resources[lang].translation = {
                ...(this._resources[lang].translation as { [key: string]: any }),
                ...additionalResource,
            };
        } else {
            this._resources[lang] = { translation: additionalResource };
        }

        return this;
    }

    build() {
        return this._resources;
    }
}

const RmgTranslate = { Builder };
export * from './util/types';
export default RmgTranslate;
