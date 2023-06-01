import { defaultTranslation, LanguageCode, OPTIONAL_LANGUAGES, SUPPORTED_LANGUAGES, Translation } from '../src';

const $ = document.querySelector.bind(document);

const allTranslations: Record<string, Translation> = {};

Object.entries(defaultTranslation).forEach(([lang, resource]) => {
    Object.entries(resource).forEach(([key, value]) => {
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

    [...SUPPORTED_LANGUAGES, ...OPTIONAL_LANGUAGES].forEach(lang => {
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
