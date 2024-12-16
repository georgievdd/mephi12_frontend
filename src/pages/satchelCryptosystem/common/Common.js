import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { root } from "../config";
import { unitByName } from "@shared/config/units";
import { Link } from "react-router-dom";
import { UnitHeader } from "@shared/ui/UnitHeader/UnitHeader";
export const Common = () => {
    const { description } = unitByName(root.slice(1));
    return (_jsxs("div", { className: 'unit-container', children: [_jsx(UnitHeader, {}), _jsxs("div", { className: "content", children: [_jsxs("div", { className: "services tag shadow", children: [_jsx(Link, { to: `${root}/editorial`, children: "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B" }), _jsx(Link, { to: `${root}/demo`, children: "\u0414\u0435\u043C\u043E" }), _jsx(Link, { to: `${root}/test`, children: "\u0422\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435" })] }), _jsxs("div", { className: "description tag shadow", children: [_jsx("h3", { children: "\u0410\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u044F" }), _jsx("p", { children: description })] })] })] }));
};
Common.url = root + '/common';
