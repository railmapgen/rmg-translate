export const SUPPORTED_LANGUAGES = ['en', 'ko', 'zh-Hans', 'zh-Hant'] as const;
export type SupportedLanguageCode = (typeof SUPPORTED_LANGUAGES)[number];
export type LanguageCode =
    | SupportedLanguageCode
    | 'ar' // Arabic
    | 'az' // Azerbaijani
    | 'ca' // Catalan
    | 'de' // German
    | 'en' // English
    | 'es' // Spanish
    | 'fa' // Persian
    | 'fr' // French
    | 'ga' // Irish
    | 'gd' // Scottish Gaelic
    | 'hi' // Hindi
    | 'ja' // Japanese
    | 'ko' // Korean
    | 'ms' // Malay
    | 'no' // Norwegian
    | 'pt' // Portuguese
    | 'ru' // Russian
    | 'sv' // Swedish
    | 'tr' // Turkish
    | 'zh' // Chinese
    | 'zh-CN' // ChineseCN
    | 'zh-Hans' // ChineseSimp
    | 'zh-Hant' // ChineseTrad
    | 'zh-HK' // ChineseHK
    | 'zh-TW'; // ChineseTW

export type Translation = Partial<Record<LanguageCode, string>>;

type LanguageName<L extends LanguageCode> = Record<L, string> & Record<SupportedLanguageCode, string> & Translation;
type LanguageNameMap<T extends LanguageCode> = { [K in T]: LanguageName<K> };

export const LANGUAGE_NAMES: LanguageNameMap<LanguageCode> = {
    ar: {
        ar: 'العربية',
        en: 'Arabic',
        ko: '아랍어',
        'zh-Hans': '阿拉伯文',
        'zh-Hant': '阿拉伯文',
    },
    az: {
        az: 'Azərbaycanca',
        en: 'Azerbaijani',
        ko: '아제르바이잔어',
        'zh-Hans': '阿塞拜疆文',
        'zh-Hant': '阿塞拜疆文',
    },
    ca: {
        ca: 'Català',
        en: 'Catalan',
        ko: '카탈루냐어',
        'zh-Hans': '加泰罗尼亚文',
        'zh-Hant': '加泰隆尼亞文',
    },
    de: {
        de: 'Deutsch',
        en: 'German',
        ko: '독일어',
        'zh-Hans': '德文',
        'zh-Hant': '德文',
    },
    en: {
        en: 'English',
        ko: '영어',
        'zh-Hans': '英文',
        'zh-Hant': '英文',
    },
    es: {
        en: 'Spanish',
        es: 'Español',
        ko: '스페인어',
        'zh-Hans': '西班牙文',
        'zh-Hant': '西班牙文',
    },
    fa: {
        en: 'Persian',
        fa: 'فارسی',
        ko: '페르시아어',
        'zh-Hans': '波斯文',
        'zh-Hant': '波斯文',
    },
    fr: {
        en: 'French',
        fr: 'Français',
        ko: '프랑스어',
        'zh-Hans': '法文',
        'zh-Hant': '法文',
    },
    ga: {
        en: 'Irish',
        ga: 'Gaeilge',
        ko: '아일랜드어',
        'zh-Hans': '爱尔兰文',
        'zh-Hant': '愛爾蘭文',
    },
    gd: {
        en: 'Scottish Gaelic',
        gd: 'Gàidhlig',
        ko: '스코틀랜드 게일어',
        'zh-Hans': '苏格兰盖尔文',
        'zh-Hant': '蘇格蘭蓋爾文',
    },
    hi: {
        en: 'Hindi',
        hi: 'हिन्दी',
        ko: '힌디어',
        'zh-Hans': '印地文',
        'zh-Hant': '印地文',
    },
    ja: {
        en: 'Japanese',
        ja: '日本語',
        ko: '일본어',
        'zh-Hans': '日文',
        'zh-Hant': '日文',
    },
    ko: {
        en: 'Korean',
        ko: '한국어',
        'zh-Hans': '韩文',
        'zh-Hant': '韓文',
    },
    ms: {
        en: 'Malay',
        ko: '말레이어',
        ms: 'Bahasa Melayu',
        'zh-Hans': '马来文',
        'zh-Hant': '馬來文',
    },
    no: {
        en: 'Norwegian',
        ko: '노르웨이어',
        no: 'Norsk',
        'zh-Hans': '挪威文',
        'zh-Hant': '挪威文',
    },
    pt: {
        en: 'Portuguese',
        ko: '포르투갈어',
        pt: 'Português',
        'zh-Hans': '葡萄牙文',
        'zh-Hant': '葡萄牙文',
    },
    ru: {
        en: 'Russian',
        ko: '러시아어',
        ru: 'Русский',
        'zh-Hans': '俄文',
        'zh-Hant': '俄文',
    },
    sv: {
        en: 'Swedish',
        ko: '스웨덴어',
        sv: 'Svenska',
        'zh-Hans': '瑞典文',
        'zh-Hant': '瑞典文',
    },
    tr: {
        en: 'Turkish',
        ko: '튀르키예어',
        tr: 'Türkçe',
        'zh-Hans': '土耳其文',
        'zh-Hant': '土耳其文',
    },
    zh: {
        en: 'Chinese',
        ko: '중국어',
        zh: '中文',
        'zh-Hans': '中文',
        'zh-Hant': '中文',
    },
    'zh-CN': {
        en: 'Simplified Chinese (China)',
        ko: '중국어 간체자(중국)',
        'zh-CN': '简体中文',
        'zh-Hans': '简体中文（中国）',
        'zh-Hant': '簡體中文（中國）',
    },
    'zh-Hans': {
        en: 'Simplified Chinese',
        ko: '중국어 간체자',
        'zh-Hans': '简体中文',
        'zh-Hant': '簡體中文',
    },
    'zh-Hant': {
        en: 'Traditional Chinese',
        ko: '중국어 정체자',
        'zh-Hans': '繁体中文',
        'zh-Hant': '繁體中文',
    },
    'zh-HK': {
        en: 'Traditional Chinese (Hong Kong)',
        ko: '중국어 정체자(홍콩)',
        'zh-Hans': '繁体中文（香港）',
        'zh-Hant': '繁體中文（香港）',
        'zh-HK': '繁體中文',
    },
    'zh-TW': {
        en: 'Traditional Chinese (Taiwan)',
        ko: '중국어 정체자(대만)',
        'zh-Hans': '繁体中文（台湾）',
        'zh-Hant': '繁體中文（台灣）',
        'zh-TW': '正體中文',
    },
};
