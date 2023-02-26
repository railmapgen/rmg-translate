import rmgTranslate, { LanguageCode, SUPPORTED_LANGUAGE, Translation } from '../src';

const $ = document.querySelector.bind(document);

const allTranslations: Record<string, Translation> = {};

const i18nBuilder = new rmgTranslate.Builder().withLng('en').withResource('zh-Hant', { 'test item': '測試項目' });

Object.entries(i18nBuilder.getResource()).forEach(([lang, resource]) => {
    Object.entries(resource.translation).forEach(([key, value]) => {
        allTranslations[key] = {
            ...allTranslations[key],
            [lang as LanguageCode]: value,
        };
    });
});

const table = document.createElement('table');
const tbody = document.createElement('tbody');
Object.entries(allTranslations).forEach(([origin, translations]) => {
    const tr = document.createElement('tr');
    const colName = document.createElement('td');
    colName.textContent = origin;
    tr.append(colName);

    SUPPORTED_LANGUAGE.forEach(lang => {
        if (lang === 'en') return;
        const td = document.createElement('td');
        td.lang = lang;
        td.textContent = translations[lang] ?? '';
        tr.append(td);
    });
    tbody.append(tr);
});
table.append(tbody);

$('#root')?.append(table);
(window as any).i18n = i18nBuilder.build();
