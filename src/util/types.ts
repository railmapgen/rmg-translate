export const SUPPORTED_LANGUAGES = ['en', 'zh-Hans', 'zh-Hant'] as const;
export const OPTIONAL_LANGUAGES = ['ja', 'ko'] as const;
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
    | 'fi' // Finnish
    | 'fr' // French
    | 'ga' // Irish
    | 'gd' // Scottish Gaelic
    | 'hi' // Hindi
    | 'he' // Hebrew
    | 'hr' // Croatian
    | 'hu' // Hungarian
    | 'id' // Indonesian
    | 'it' // Italian
    | 'ja' // Japanese
    | 'kk' // Kazakh
    | 'ko' // Korean
    | 'mi' // Māori
    | 'ms' // Malay
    | 'nl' // Dutch
    | 'no' // Norwegian
    | 'pl' // Polish
    | 'pt' // Portuguese
    | 'rm' // Romansh
    | 'ro' // Romanian
    | 'ru' // Russian
    | 'sv' // Swedish
    | 'ta' // Tamil
    | 'th' // Thai
    | 'tr' // Turkish
    | 'uk' // Ukrainian
    | 'ur' // Urdu
    | 'uz' // Uzbek
    | 'vi' // Vietnamese
    | 'zh' // Chinese
    | 'zh-Hans' // ChineseSimp
    | 'zh-Hant'; // ChineseTrad

export type Translation = Partial<Record<LanguageCode, string>>;

type LanguageName<L extends LanguageCode> = Record<L, string> &
    Record<SupportedLanguageCode, string> &
    // Record<OptionalLanguageCode, string> &
    Translation;
type LanguageNameMap<T extends LanguageCode> = { [K in T]: LanguageName<K> };

export const LANGUAGE_NAMES: LanguageNameMap<LanguageCode> = {
    ar: {
        ar: 'العربية',
        en: 'Arabic',
        ko: '아랍어',
        'zh-Hans': '阿拉伯语',
        'zh-Hant': '阿拉伯語',
    },
    az: {
        az: 'Azərbaycanca',
        en: 'Azerbaijani',
        ko: '아제르바이잔어',
        'zh-Hans': '阿塞拜疆语',
        'zh-Hant': '阿塞拜疆語',
    },
    ca: {
        ca: 'Català',
        en: 'Catalan',
        ko: '카탈루냐어',
        'zh-Hans': '加泰罗尼亚语',
        'zh-Hant': '加泰隆尼亞語',
    },
    da: {
        da: 'Dansk',
        en: 'Danish',
        ko: '덴마크어',
        'zh-Hans': '丹麦语',
        'zh-Hant': '丹麥語',
    },
    de: {
        de: 'Deutsch',
        en: 'German',
        ko: '독일어',
        'zh-Hans': '德语',
        'zh-Hant': '德語',
    },
    el: {
        el: 'Ελληνικά',
        en: 'Greek',
        ko: '그리스어',
        'zh-Hans': '希腊语',
        'zh-Hant': '希臘語',
    },
    en: {
        en: 'English',
        ja: '英語',
        ko: '영어',
        'zh-Hans': '英语',
        'zh-Hant': '英語',
    },
    es: {
        en: 'Spanish',
        es: 'Español',
        ko: '스페인어',
        'zh-Hans': '西班牙语',
        'zh-Hant': '西班牙語',
    },
    fa: {
        en: 'Persian',
        fa: 'فارسی',
        ko: '페르시아어',
        'zh-Hans': '波斯语',
        'zh-Hant': '波斯語',
    },
    fi: {
        en: 'Finnish',
        fi: 'Suomi',
        'zh-Hans': '芬兰语',
        'zh-Hant': '芬蘭語',
    },
    fr: {
        en: 'French',
        fr: 'Français',
        ko: '프랑스어',
        'zh-Hans': '法语',
        'zh-Hant': '法語',
    },
    ga: {
        en: 'Irish',
        ga: 'Gaeilge',
        ko: '아일랜드어',
        'zh-Hans': '爱尔兰语',
        'zh-Hant': '愛爾蘭語',
    },
    gd: {
        en: 'Scottish Gaelic',
        gd: 'Gàidhlig',
        ko: '스코틀랜드 게일어',
        'zh-Hans': '苏格兰盖尔语',
        'zh-Hant': '蘇格蘭蓋爾語',
    },
    he: {
        en: 'Hebrew',
        he: 'עִבְרִית',
        'zh-Hans': '希伯来语',
        'zh-Hant': '希伯來語',
    },
    hi: {
        en: 'Hindi',
        hi: 'हिन्दी',
        ko: '힌디어',
        'zh-Hans': '印地语',
        'zh-Hant': '印地語',
    },
    hr: {
        en: 'Croatian',
        hr: 'Hrvatski',
        'zh-Hans': '克罗地亚语',
        'zh-Hant': '克羅地亞語',
    },
    hu: {
        en: 'Hungarian',
        hu: 'Magyar',
        ko: '헝가리어',
        'zh-Hans': '匈牙利语',
        'zh-Hant': '匈牙利語',
    },
    id: {
        en: 'Indoesian',
        id: 'Bahasa Indonesia',
        ko: '인도네시아어',
        'zh-Hans': '印尼语',
        'zh-Hant': '印尼語',
    },
    it: {
        en: 'Italian',
        it: 'Italiano',
        ko: '이탈리아어',
        'zh-Hans': '意大利语',
        'zh-Hant': '意大利語',
    },
    ja: {
        en: 'Japanese',
        ja: '日本語',
        ko: '일본어',
        'zh-Hans': '日语',
        'zh-Hant': '日語',
    },
    kk: {
        en: 'Kazakh',
        kk: 'Қазақша',
        ko: '카자흐어',
        'zh-Hans': '哈萨克语',
        'zh-Hant': '哈薩克語',
    },
    ko: {
        en: 'Korean',
        ja: '韓国語',
        ko: '한국어',
        'zh-Hans': '韩语',
        'zh-Hant': '韓語',
    },
    mi: {
        en: 'Māori',
        mi: 'Māori',
        'zh-Hans': '毛利语',
        'zh-Hant': '毛利語',
    },
    ms: {
        en: 'Malay',
        ko: '말레이어',
        ms: 'Bahasa Melayu',
        'zh-Hans': '马来语',
        'zh-Hant': '馬來語',
    },
    nl: {
        en: 'Dutch',
        nl: 'Nederlands',
        'zh-Hans': '荷兰语',
        'zh-Hant': '荷蘭語',
    },
    no: {
        en: 'Norwegian',
        ko: '노르웨이어',
        no: 'Norsk',
        'zh-Hans': '挪威语',
        'zh-Hant': '挪威語',
    },
    pl: {
        en: 'Polish',
        ko: '폴란드어',
        pl: 'Polski',
        'zh-Hans': '波兰语',
        'zh-Hant': '波蘭語',
    },
    pt: {
        en: 'Portuguese',
        ko: '포르투갈어',
        pt: 'Português',
        'zh-Hans': '葡萄牙语',
        'zh-Hant': '葡萄牙語',
    },
    rm: {
        en: 'Romansh',
        rm: 'Rumantsch',
        'zh-Hans': '罗曼什语',
        'zh-Hant': '羅曼什語',
    },
    ro: {
        en: 'Romanian',
        ko: '루마니아어',
        ro: 'Română',
        'zh-Hans': '罗马尼亚语',
        'zh-Hant': '羅馬尼亞語',
    },
    ru: {
        en: 'Russian',
        ko: '러시아어',
        ru: 'Русский',
        'zh-Hans': '俄语',
        'zh-Hant': '俄語',
    },
    sv: {
        en: 'Swedish',
        ko: '스웨덴어',
        sv: 'Svenska',
        'zh-Hans': '瑞典语',
        'zh-Hant': '瑞典語',
    },
    ta: {
        en: 'Tamil',
        ta: 'தமிழ்',
        'zh-Hans': '泰米尔语',
        'zh-Hant': '泰米爾語',
    },
    th: {
        en: 'Thai',
        ko: '태국어',
        th: 'ภาษาไทย',
        'zh-Hans': '泰语',
        'zh-Hant': '泰語',
    },
    tr: {
        en: 'Turkish',
        ko: '튀르키예어',
        tr: 'Türkçe',
        'zh-Hans': '土耳其语',
        'zh-Hant': '土耳其語',
    },
    uk: {
        en: 'Ukrainian',
        ko: '우크라이나어',
        uk: 'Українська',
        'zh-Hans': '乌克兰语',
        'zh-Hant': '烏克蘭語',
    },
    ur: {
        en: 'Urdo',
        ko: '우르두어',
        ur: 'اردو',
        'zh-Hans': '乌尔都语',
        'zh-Hant': '烏爾都語',
    },
    uz: {
        en: 'Uzbek',
        ko: '우즈베크어',
        uz: 'Oʻzbekcha',
        'zh-Hans': '乌兹别克语',
        'zh-Hant': '烏茲別克語',
    },
    vi: {
        en: 'Vietnamese',
        ko: '베트남어',
        vi: 'Tiếng Việt',
        'zh-Hans': '越南语',
        'zh-Hant': '越南語',
    },
    zh: {
        en: 'Chinese',
        ja: '中国語',
        ko: '중국어',
        zh: '中文',
        'zh-Hans': '中文',
        'zh-Hant': '中文',
    },
    'zh-Hans': {
        en: 'Simplified Chinese',
        ja: '中国語（簡体字）',
        ko: '중국어 간체자',
        'zh-Hans': '简体中文',
        'zh-Hant': '簡體中文',
    },
    'zh-Hant': {
        en: 'Traditional Chinese',
        ja: '中国語（繁体字）',
        ko: '중국어 정체자',
        'zh-Hans': '繁体中文',
        'zh-Hant': '繁體中文',
    },
};
