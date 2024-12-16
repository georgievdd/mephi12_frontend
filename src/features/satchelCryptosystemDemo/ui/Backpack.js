import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { InlineMath } from 'react-katex';
import './styles.css';
const Num = ({ light, num }) => {
    if (!light) {
        return _jsx("p", { className: 'num', children: num });
    }
    const { left, len, color } = light;
    const l = num.slice(0, left);
    const mid = num.slice(left, left + len);
    const r = num.slice(left + len);
    return (_jsxs(_Fragment, { children: [_jsx("p", { className: 'num', children: l }), _jsx("p", { className: 'num', style: { color: color }, children: mid }), _jsx("p", { className: 'num', children: r })] }));
};
export const Backpack = ({ numbers, literal, light, }) => {
    return (_jsx("div", { className: 'light_backpack', children: numbers.map((num, index) => (_jsxs("div", { children: [_jsx(InlineMath, { math: `${literal}_${index} = ` }), _jsx(Num, { light: light, num: num })] }))) }));
};
