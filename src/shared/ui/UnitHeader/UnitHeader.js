import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Link, useLocation } from 'react-router-dom';
import { getPathParts } from './utils';
export const UnitHeader = () => {
    const location = useLocation();
    const parts = getPathParts(location.pathname);
    return (_jsx("div", { className: "header", children: _jsxs("h2", { className: "tag shadow", children: [parts.slice(0, -1).map(({ label, url }) => (_jsxs(Link, { to: url, children: [label, " / "] }))), parts.at(-1).label] }) }));
};
