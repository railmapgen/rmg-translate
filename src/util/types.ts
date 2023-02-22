export type LanguageCode =
    | 'az' // Azerbaijani
    | 'ar' // Arabic
    | 'ca' // Catalan
    | 'de' // German
    | 'en' // English
    | 'es' // Spanish
    | 'fa' // Persian
    | 'fr' // French
    | 'ga' // Gaelic
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
