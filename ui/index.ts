import rmgTranslate from '../src';
import { LanguageCode, Translation } from '../src/util/types';

const $ = document.querySelector.bind(document);

const allTranslations: Record<string, Translation> = {};

Object.entries(rmgTranslate.resources).forEach(([lang, resource]) => {
    Object.entries(resource.translations).forEach(([key, value]) => {
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
