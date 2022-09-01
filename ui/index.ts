import rmgTranslate from '../src';

const $ = document.querySelector.bind(document);

const allResources: Record<string, Record<string, string>> = {};

Object.entries(rmgTranslate.scripts).forEach(([lang, scripts]) => {
    Object.entries(scripts).forEach(([key, value]) => {
        if (key in allResources) {
            allResources[key][lang] = value;
        } else {
            allResources[key] = { [lang]: value };
        }
    });
});

const HEADERS = ['zh-Hans', 'zh-Hant'];

const table = document.createElement('table');
const tbody = document.createElement('tbody');
Object.entries(allResources).forEach(([origin, translations]) => {
    const tr = document.createElement('tr');
    const colName = document.createElement('td');
    colName.textContent = origin;
    tr.append(colName);

    HEADERS.forEach(lang => {
        const td = document.createElement('td');
        td.textContent = translations[lang];
        tr.append(td);
    });
    tbody.append(tr);
});
table.append(tbody);

$('#root').append(table);
