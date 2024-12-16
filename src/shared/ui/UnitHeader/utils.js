import { unitByName } from "@shared/config/units";
const CONSTS = {
    editorial: 'Материалы',
    demo: 'Демо',
    test: 'Тестирование',
};
export const getPathParts = (path) => {
    const [unit, type] = path.split('/').filter(Boolean);
    const { title, url, name } = unitByName(unit);
    const parts = [{ label: 'Разделы', url: '/' }, { label: title, url }];
    if (type !== 'common') {
        parts.push({ label: CONSTS[type], url: `/${name}/${type}` });
    }
    return parts;
};
