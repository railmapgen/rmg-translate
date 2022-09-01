import zhHansScripts from './translations/zh-Hans.json';
import zhHantScripts from './translations/zh-Hant.json';

const scripts: Record<string, Record<string, string>> = {
    'zh-Hans': zhHansScripts,
    'zh-Hant': zhHantScripts,
};

const rmgTranslate = { scripts };

export default rmgTranslate;
