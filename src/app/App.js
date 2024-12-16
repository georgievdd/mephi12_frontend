import { jsx as _jsx } from "react/jsx-runtime";
import '@shared/styles/common.scss';
import '@shared/styles/unit.scss';
import { Routing } from './routing';
export const App = () => {
    return (_jsx("main", { children: _jsx(Routing, {}) }));
};
