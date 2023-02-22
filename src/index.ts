import i18n, { Module, Resource } from 'i18next';
import { LanguageCode } from './util/types';
import zhHansTranslation from './translations/zh-Hans.json';
import zhHantTranslation from './translations/zh-Hant.json';
import koTranslation from './translations/ko.json';

class Builder {
    private _appName = 'RMG';
    private _lng: string | undefined = undefined;
    private readonly _resources: Resource;

    constructor() {
        this._resources = {
            'zh-Hans': { translation: zhHansTranslation },
            'zh-Hant': { translation: zhHantTranslation },
            ko: { translation: koTranslation },
        };
    }

    use(module: Module) {
        i18n.use(module);
        return this;
    }

    withAppName(appName: string) {
        this._appName = appName;
        return this;
    }

    withLng(lng: string) {
        this._lng = lng;
        return this;
    }

    getResource() {
        return this._resources;
    }

    withResource(lang: LanguageCode, additionalResource: Record<string, any>) {
        if (lang in this._resources) {
            this._resources[lang].translation = {
                ...(this._resources[lang].translation as Record<string, any>),
                ...additionalResource,
            };
        } else {
            this._resources[lang] = { translation: additionalResource };
        }

        return this;
    }

    build() {
        i18n.init({
            lng: this._lng,
            fallbackLng: {
                'zh-CN': ['zh-Hans', 'en'],
                'zh-HK': ['zh-Hant', 'en'],
                'zh-TW': ['zh-Hant', 'en'],
                'zh-Hant': ['zh-HK', 'zh-TW', 'en'],
                default: ['en'],
            },
            resources: this._resources,
        })
            .then(t => {
                document.title = t(this._appName);
                document.documentElement.lang = i18n.language;
            })
            .catch(err => {
                console.error('[rmg-translate] unexpected error occurs while initialising i18n', err);
            });

        i18n.on('languageChanged', lng => {
            document.title = i18n.t(this._appName);
            document.documentElement.lang = lng;
        });

        return i18n;
    }
}

const rmgTranslate = { Builder };
export * from './util/types';
export default rmgTranslate;
