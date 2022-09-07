import rmgTranslate, { LanguageCode, Translation } from '../src';

const $ = document.querySelector.bind(document);

const allTranslations: Record<string, Translation> = {};

const resources = rmgTranslate.resources;
rmgTranslate.enrichResources(resources, 'zh-Hant', { 'test item': '測試項目' });

Object.entries(resources).forEach(([lang, resource]) => {
    Object.entries(resource.translation).forEach(([key, value]) => {
        allTranslations[key] = {
            ...allTranslations[key],
            [lang as LanguageCode]: value,
        };
    });
});

const HEADERS: LanguageCode[] = [LanguageCode.ChineseSimp, LanguageCode.ChineseTrad];

const table = document.createElement('table');
const tbody = document.createElement('tbody');
Object.entries(allTranslations).forEach(([origin, translations]) => {
    const tr = document.createElement('tr');
    const colName = document.createElement('td');
    colName.textContent = origin;
    tr.append(colName);

    HEADERS.forEach(lang => {
        const td = document.createElement('td');
        td.textContent = translations[lang] ?? '';
        tr.append(td);
    });
    tbody.append(tr);
});
table.append(tbody);

$('#root')?.append(table);
