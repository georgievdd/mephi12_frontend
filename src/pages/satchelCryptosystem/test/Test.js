import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import './styles.scss';
import { UnitHeader } from '@shared/ui/UnitHeader';
import { root } from '../config';
import { useEffect, useState } from 'react';
import { checkTask, getTask } from './models';
import { useFetch } from '@shared/utils/useFetch';
import { Input, useInput } from '@shared/ui/Input';
const title1 = "Приведите пример ранцеврй криптосистемы с кодированием степеней(возможно в некоторых разрядах, ориентируйтесь на легкий ранец).";
const title2 = "Приведите пример ранцеврй криптосистемы с кодированием произвольной сверхвозрастающей последовательности";
export const useBackpack = (data, field) => {
    const [backpack, set] = useState([]);
    const onChange = (idx) => (e) => {
        console.log(e);
        set(prev => prev.map((v, i) => i === idx ? ({ value: e.target.value, onChange: v.onChange }) : v));
    };
    useEffect(() => {
        if (data) {
            set(data[field].map((v, i) => ({
                value: v,
                onChange: onChange(i),
                disabled: v !== '0',
            })));
        }
        else {
            set([]);
        }
    }, [data]);
    return backpack;
};
export const useHardBackpack = (other) => {
    const [backpack, set] = useState([]);
    const onChange = (idx) => (e) => {
        set(prev => prev.map((v, i) => i === idx ? ({ value: e.target.value, onChange: v.onChange }) : v));
    };
    useEffect(() => {
        set(Array.from({ length: other.length }).map((_, i) => ({
            value: '0',
            onChange: onChange(i),
        })));
    }, [other]);
    return backpack;
};
const useTask = () => {
    const { data } = useFetch(getTask, null);
    const R = useInput('0');
    const S = useInput('0');
    const T = useInput('0');
    const M = useInput('0');
    const C = useInput('0');
    const P = useInput('0');
    const lightBackpack = useBackpack(data, 'lightBackpack');
    const hardBackpack = useHardBackpack(lightBackpack);
    useEffect(() => {
        if (data) {
            console.log(data);
            R.set(data.R);
            data.R !== '0' && R.setDisabled(true);
            M.set(data.message);
            M.setDisabled(true);
            P.set(data.power);
            data.power !== '0' && P.setDisabled(true);
        }
    }, [data]);
    return {
        data,
        R,
        S,
        T,
        M,
        C,
        P,
        lightBackpack,
        hardBackpack,
    };
};
const TestImpl = () => {
    const { data, R, S, T, lightBackpack, hardBackpack, M, C, P } = useTask();
    const [result, setResult] = useState(null);
    const check = () => {
        checkTask({
            power: Number(P.value),
            id: data.id,
            type: data.label,
            message: M.value.split('').map(i => i === '1'),
            lightBackpack: lightBackpack.map(v => Number(v.value)),
            omega: Number(R.value),
            hardBackpack: hardBackpack.map(v => Number(v.value)),
            encodedMessage: Number(C.value),
            decodedMessage: M.value.split('').map(i => i === '1'),
            module: Number(T.value),
            reverseOmega: Number(S.value),
        }).then(({ errorDescription }) => {
            setResult({ error: errorDescription });
        });
    };
    if (!data)
        return;
    return (_jsxs("div", { className: "task-container shadow", children: [_jsx("h3", { className: 'title', children: P.value === '0' ? title1 : title2 }), P.value !== '0' &&
                _jsxs(_Fragment, { children: [_jsx("p", { className: 'subtitle', children: "\u041F\u0440\u0438\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0440\u0438\u043C\u0435\u0440 \u0440\u0430\u043D\u0446\u0435\u0432\u0440\u0439 \u043A\u0440\u0438\u043F\u0442\u043E\u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0441 \u043A\u043E\u0434\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0441\u0442\u0435\u043F\u0435\u043D\u0435\u0439(\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0432 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0440\u0430\u0437\u0440\u044F\u0434\u0430\u0445, \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044C \u043D\u0430 \u043B\u0435\u0433\u043A\u0438\u0439 \u0440\u0430\u043D\u0435\u0446)." }), _jsx(Input, { label: 'P = ', ...P })] }), _jsx("p", { className: 'subtitle', children: "\u041A\u043B\u044E\u0447\u0438" }), _jsx(Input, { label: 'R = ', ...R }), _jsx(Input, { label: 'S = ', ...S }), _jsx(Input, { label: 'T = ', ...T }), _jsx("p", { className: 'subtitle', children: "\u041B\u0435\u0433\u043A\u0438\u0439 \u0440\u044E\u043A\u0437\u0430\u043A" }), _jsx("div", { className: 'row gap-15', children: _jsx("div", { className: 'values column gap-5', children: lightBackpack.map((a, idx) => (_jsx(Input, { ...a, label: `a${idx} = ` }, `a${idx} = `))) }) }), _jsx("p", { className: 'subtitle', children: "\u0422\u044F\u0436\u0435\u043B\u044B\u0439 \u0440\u044E\u043A\u0437\u0430\u043A" }), _jsx("div", { className: 'row gap-15', children: _jsx("div", { className: 'values column gap-5', children: hardBackpack.map((b, idx) => (_jsx(Input, { ...b, label: `b${idx} = ` }, `b${idx} = `))) }) }), _jsx("p", { className: 'subtitle', children: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435" }), _jsx(Input, { label: 'M = ', ...M }), _jsx("p", { className: 'subtitle', children: "\u0417\u0430\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435" }), _jsx(Input, { label: "\u0421 = ", ...C }), _jsx("button", { onClick: check, children: "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C" }), result && (_jsx("div", { className: `result-${result.error ? 'error' : 'success'}`, children: result.error ? result.error : 'Успех!' }))] }));
};
export const Test = () => {
    return (_jsxs("div", { className: 'unit-container', children: [_jsx(UnitHeader, {}), _jsx(TestImpl, {})] }));
};
Test.url = root + '/test';
