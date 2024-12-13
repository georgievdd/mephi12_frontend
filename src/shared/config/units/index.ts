import { Unit } from "@entity/unit";
import { backpackIcon } from "@shared/assests";

export const units: Unit[] = [
    {
        name: 'satchel-cryptosystem',
        author: 'Иванов М.А.',
        title: 'Ранцевая криптосистема',
        description: 'Ранцевая криптосистема (Knapsack Cryptosystem) основана на задаче о рюкзаке (subset-sum problem), которая считается вычислительно сложной. Цель такой системы — надёжное шифрование данных, используя свойства трудноразрешимых математических задач. Это одна из первых предложенных схем асимметричного шифрования: здесь используются два ключа — публичный (для шифрования) и приватный (для расшифрования). Историческая ценность ранцевой криптосистемы в том, что она задала направление к применению относительно простых математических структур для обеспечения безопасной передачи данных. Основная идея — свести шифрование к поиску подмножества чисел, сумма которых равна заданному значению. Поскольку решение такой задачи сложно, криптосистема устойчива к атакам, основанным на переборе.',
        preview: backpackIcon,
        url: '/satchel-cryptosystem/common',
        rating: 10,
    }
]

export const unitByUrl = (path: string) => units.find(({ url }) => url === path)!
export const unitByName = (nameToCompare: string) => units.find(({ name }) => name === nameToCompare)!