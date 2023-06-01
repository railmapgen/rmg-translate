export const SUPPORTED_LANGUAGES = ['en', 'zh-Hans', 'zh-Hant'] as const;
export const OPTIONAL_LANGUAGES = ['ko'] as const;
export type SupportedLanguageCode = (typeof SUPPORTED_LANGUAGES)[number];
export type OptionalLanguageCode = (typeof OPTIONAL_LANGUAGES)[number];
export type LanguageCode =
    | SupportedLanguageCode
    | 'ar' // Arabic
    | 'az' // Azerbaijani
    | 'ca' // Catalan
    | 'da' // Danish
    | 'de' // German
    | 'el' // Greek
    | 'en' // English
    | 'es' // Spanish
    | 'fa' // Persian
    | 'fr' // French
    | 'ga' // Irish
    | 'gd' // Scottish Gaelic
    | 'hi' // Hindi
    | 'hu' // Hungarian
    | 'id' // Indonesian
    | 'it' // Italian
    | 'ja' // Japanese
    | 'ko' // Korean
    | 'ms' // Malay
    | 'no' // Norwegian
    | 'pl' // Polish
    | 'pt' // Portuguese
    | 'ro' // Romanian
    | 'ru' // Russian
    | 'sv' // Swedish
    | 'th' // Thai
    | 'tr' // Turkish
    | 'ur' // Urdu
    | 'uz' // Uzbek
    | 'vi' // Vietnamese
    | 'zh-Hans' // ChineseSimp
    | 'zh-Hant'; // ChineseTrad

export type Translation = Partial<Record<LanguageCode, string>>;

type LanguageName<L extends LanguageCode> = Record<L, string> &
    Record<SupportedLanguageCode & OptionalLanguageCode, string> &
    Translation;
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
    da: {
        da: 'Dansk',
        en: 'Danish',
        ko: '덴마크어',
        'zh-Hans': '丹麦文',
        'zh-Hant': '丹麥文',
    },
    de: {
        de: 'Deutsch',
        en: 'German',
        ko: '독일어',
        'zh-Hans': '德文',
        'zh-Hant': '德文',
    },
    el: {
        el: 'Ελληνικά',
        en: 'Greek',
        ko: '그리스어',
        'zh-Hans': '希腊文',
        'zh-Hant': '希臘文',
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
    hu: {
        en: 'Hungarian',
        hu: 'Magyar',
        ko: '헝가리어',
        'zh-Hans': '匈牙利文',
        'zh-Hant': '匈牙利文',
    },
    id: {
        en: 'Indoesian',
        id: 'Bahasa Indonesia',
        ko: '인도네시아어',
        'zh-Hans': '印尼文',
        'zh-Hant': '印尼文',
    },
    it: {
        en: 'Italian',
        it: 'Italiano',
        ko: '이탈리아어',
        'zh-Hans': '意大利文',
        'zh-Hant': '意大利文',
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
    pl: {
        en: 'Polish',
        ko: '폴란드어',
        pl: 'Polski',
        'zh-Hans': '波兰文',
        'zh-Hant': '波蘭文',
    },
    pt: {
        en: 'Portuguese',
        ko: '포르투갈어',
        pt: 'Português',
        'zh-Hans': '葡萄牙文',
        'zh-Hant': '葡萄牙文',
    },
    ro: {
        en: 'Romanian',
        ko: '루마니아어',
        ro: 'Română',
        'zh-Hans': '罗马尼亚文',
        'zh-Hant': '羅馬尼亞文',
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
    th: {
        en: 'Thai',
        ko: '태국어',
        th: 'ภาษาไทย',
        'zh-Hans': '泰文',
        'zh-Hant': '泰文',
    },
    tr: {
        en: 'Turkish',
        ko: '튀르키예어',
        tr: 'Türkçe',
        'zh-Hans': '土耳其文',
        'zh-Hant': '土耳其文',
    },
    ur: {
        en: 'Urdo',
        ko: '우르두어',
        ur: 'اردو',
        'zh-Hans': '乌尔都文',
        'zh-Hant': '烏爾都文',
    },
    uz: {
        en: 'Uzbek',
        ko: '우즈베크어',
        uz: 'Oʻzbekcha',
        'zh-Hans': '乌兹别克文',
        'zh-Hant': '烏茲別克文',
    },
    vi: {
        en: 'Vietnamese',
        ko: '베트남어',
        vi: 'Tiếng Việt',
        'zh-Hans': '越南文',
        'zh-Hant': '越南文',
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
};
