import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { UnitHeader } from '@shared/ui/UnitHeader';
import { root } from '../config';
import './styles.scss';
import { useEffect, useState } from 'react';
import { playIcon } from '@shared/assests';
import { DEFAULT_LIGHT_BACKPACK, LEN, RIGHT } from './config';
import { Input, useInput } from '@shared/ui/Input';
const multNums = (R, S, T) => {
    const r = BigInt(R);
    const s = BigInt(S);
    const t = BigInt(T);
    return String(r * s % t);
};
const calculateStep1 = (R, S, T) => {
    const result = multNums(R, S, T);
    const status = result === '1' ? 'success' : 'error';
    return {
        label: `${R} * ${S} == ${result} mod ${T}`,
        status,
    };
};
const mult = (s, v) => {
    let ans = BigInt(0);
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === '1')
            ans += BigInt(v[i]);
    }
    return String(ans);
};
const calculateStep2 = (R, T, lightBackPack) => {
    const r = BigInt(R);
    const t = BigInt(T);
    return lightBackPack.map(BigInt).map((v) => v * r % t).map(String);
};
const calculateStep4 = (M, MS) => {
    const m = BigInt('0b' + M.split('').reverse().join(''));
    const ms = BigInt(MS.slice(MS.length - RIGHT - LEN, MS.length - RIGHT));
    console.log(M, m, ms);
    return {
        status: m === ms ? 'success' : 'error',
        label: m === ms ? 'M == M\' - зашифровано и расшифровано корректно' : 'M != M\' - неверное сообщение',
    };
};
const Check = ({ onClick }) => {
    return (_jsx("div", { className: 'row gap-10', onClick: onClick, children: _jsx("img", { className: 'play', src: playIcon, alt: 'play' }) }));
};
const Result = ({ label, status }) => {
    return (_jsx("div", { className: `result-${status}`, children: _jsx("p", { children: label }) }));
};
const NumUnderline = ({ num }) => {
    const l = num.slice(0, num.length - RIGHT - LEN);
    const mid = num.slice(num.length - RIGHT - LEN, num.length - RIGHT);
    const r = num.slice(num.length - RIGHT);
    return (_jsxs("div", { className: 'center', children: [_jsx("p", { children: l }), _jsx("p", { style: { color: '#31E458' }, children: mid }), _jsx("p", { children: r })] }));
};
export const Demo = () => {
    const R = useInput('41');
    const S = useInput('59');
    const T = useInput('2418');
    const [result1, setResult1] = useState(null);
    const checkFirstStep = () => {
        setResult1(calculateStep1(R.value, S.value, T.value));
    };
    const [hightPack, setHightPack] = useState([]);
    const lightPack = DEFAULT_LIGHT_BACKPACK.map((value) => {
        return useInput(value);
    });
    useEffect(() => {
        setHightPack(calculateStep2(R.value, T.value, lightPack.map(({ value }) => value)));
    }, [R.value, T.value, ...lightPack.map(({ value }) => value)]);
    const M = useInput('10011');
    const [C, setC] = useState('0');
    useEffect(() => {
        if (M.value && hightPack.length) {
            setC(mult(M.value, hightPack));
        }
    }, [hightPack, M.value]);
    const [MS, setMS] = useState('0');
    useEffect(() => {
        setMS(multNums(C, S.value, T.value));
    }, [C, S.value, T.value]);
    const [result4, setResult4] = useState(null);
    const check4 = () => {
        setResult4(calculateStep4(M.value, MS));
    };
    return (_jsxs("div", { className: 'unit-container', children: [_jsx(UnitHeader, {}), _jsxs("div", { className: 'demo-content shadow', children: [_jsxs("div", { className: "block", children: [_jsx("h3", { children: "\u0428\u0430\u0433 1. \u0413\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F \u043F\u0430\u0440\u044B \u043A\u043B\u044E\u0447\u0435\u0439." }), _jsx("p", { children: "\u0412\u043E\u0437\u044C\u043C\u0435\u043C R, S, T \u0442\u0430\u043A\u0438\u0435, \u0447\u0442\u043E R * S = 1 mod T" }), _jsxs("div", { className: 'row gap-15', children: [_jsxs("div", { className: 'values', children: [_jsx(Input, { ...R, label: 'R = ' }), _jsx(Input, { ...S, label: 'S = ' }), _jsx(Input, { ...T, label: 'T = ' })] }), _jsx(Check, { onClick: checkFirstStep })] }), result1 && _jsx(Result, { ...result1 })] }), _jsxs("div", { className: "block", children: [_jsx("h3", { children: "\u0428\u0430\u0433 2. \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043B\u0435\u0433\u043A\u043E\u0433\u043E \u0438 \u0442\u044F\u0436\u0435\u043B\u043E\u0433\u043E \u0440\u044E\u043A\u0437\u0430\u043A\u0430." }), _jsx("p", { children: "C\u043E\u0441\u0442\u0430\u0432\u0438\u043C \u043B\u0435\u0433\u043A\u0443\u044E \u0437\u0430\u0434\u0430\u0447\u0443 \u043E\u0431 \u0443\u043A\u043B\u0430\u0434\u043A\u0435 \u0440\u044E\u043A\u0437\u0430\u043A\u0430" }), _jsx("div", { className: 'row gap-15', children: _jsx("div", { className: 'values', children: lightPack.map((a, idx) => (_jsx(Input, { ...a, label: `a${idx} = ` }, `a${idx} = `))) }) }), _jsx("p", { children: "\u041D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u043B\u0435\u0433\u043A\u043E\u0433\u043E \u0440\u044E\u043A\u0437\u0430\u043A\u0430 \u0438 R \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u043C \u0442\u0440\u0443\u0434\u043D\u0443\u044E \u0437\u0430\u0434\u0430\u0447\u0443 \u043E\u0431 \u0443\u043A\u043B\u0430\u0434\u043A\u0435 \u0440\u044E\u043A\u0437\u0430\u043A\u0430. B = A * R." }), _jsxs("div", { className: 'row gap-15', children: [_jsx("div", { className: 'values', children: lightPack.map((a, idx) => (_jsx("div", { children: a.value }))) }), _jsx("div", { className: 'center', children: "*" }), _jsx("div", { className: 'center', children: R.value }), _jsx("div", { className: 'center', children: "=" }), _jsx("div", { className: "values", children: hightPack.map((v) => _jsx("div", { children: v })) })] })] }), _jsxs("div", { className: "block", children: [_jsx("h3", { children: "\u0428\u0430\u0433 3. \u041A\u043E\u0434\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F." }), _jsxs("div", { className: "row center gap-15 start", children: [_jsx("p", { children: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435" }), _jsx("div", { className: 'row gap-15', children: _jsx("div", { className: 'values', children: _jsx(Input, { ...M, label: 'M = ' }) }) }), _jsx("p", { children: "\u0448\u0438\u0444\u0440\u0443\u0435\u0442\u0441\u044F \u043F\u043E \u0444\u043E\u0440\u043C\u0443\u043B\u0435 C = M * b" })] }), _jsxs("div", { className: "row gap-15", children: [_jsx("div", { className: "center", children: _jsx("div", { children: M.value }) }), _jsx("div", { className: "center", children: "*" }), _jsx("div", { className: 'values', children: lightPack.map((a, idx) => (_jsx("div", { children: a.value }))) }), _jsx("div", { className: "center", children: "=" }), _jsx("div", { className: 'center', children: C })] })] }), _jsxs("div", { className: "block", children: [_jsx("h3", { children: "\u0428\u0430\u0433 4. \u0420\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u043A\u0430 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F." }), _jsx("p", { children: "\u0420\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u044B\u0432\u0430\u0435\u043C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043F\u043E \u0444\u043E\u0440\u043C\u0443\u043B\u0435 M' = C * S mod T" }), _jsxs("div", { className: "row gap-15", children: [_jsx("div", { className: "values-l center", children: _jsx("div", { children: C }) }), _jsx("div", { className: "center", children: "*" }), _jsx("div", { className: "values-l center", children: _jsxs("div", { children: [S.value, " mod ", T.value] }) }), _jsx("div", { className: "center", children: "=" }), _jsx(NumUnderline, { num: MS }), _jsx(Check, { onClick: check4 })] }), result4 && _jsx(Result, { ...result4 })] })] })] }));
};
Demo.url = root + '/demo';
