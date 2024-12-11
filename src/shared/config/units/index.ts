import { Unit } from "@entity/unit";
import { backpackIcon } from "@shared/assests";

export const units: Unit[] = Array.from({length: 20}).map(() => (
    {
        name: 'satchel-cryptosystem',
        author: 'Иванов М.А.',
        title: 'Ранцевая криптосистема',
        description: 'Ранцевая криптосистема (или "backpack cryptosystem") — это тип криптографической системы, основанной на математических задачах, связанных с рюкзаком (или задачей о рюкзаке).',
        preview: backpackIcon,
        url: '/satchel-cryptosystem/common',
        rating: 10,
    }
))