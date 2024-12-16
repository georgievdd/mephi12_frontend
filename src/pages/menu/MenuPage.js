import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { units } from '@shared/config/units';
import './styles.scss';
import { AnimatedText } from '@shared/ui/AnimatedText';
import { UnitCard } from '@entity/unit';
export const MenuPage = () => {
    return (_jsxs("div", { className: 'menu-container', children: [_jsx("header", { children: _jsxs(AnimatedText.Scope, { children: [_jsx(AnimatedText.h1, { interval: 50, text: '3 \u0441\u0435\u043C\u0435\u0441\u0442\u0440. \u041A\u0440\u0438\u043F\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043C\u0435\u0442\u043E\u0434\u044B \u0437\u0430\u0449\u0438\u0442\u044B \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438.' }), _jsx(AnimatedText.p, { className: 'spoiler', text: '\u041A\u0438\u0431\u0435\u0440\u0432\u043E\u0439\u043D\u0430 \u0443\u0436\u0435 \u0438\u0434\u0435\u0442!' })] }) }), _jsxs("div", { className: 'units', children: [_jsx("h2", { className: 'units-text', children: "\u0420\u0430\u0437\u0434\u0435\u043B\u044B" }), _jsx("div", { className: 'items', children: units.map(UnitCard) })] })] }));
};
MenuPage.url = '/';
