import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
export const Routing = () => (_jsx(Router, { children: _jsx(Routes, { children: routes.map((Component) => (_jsx(Route, { path: Component.url, element: _jsx(Component, {}) }, Component.url))) }) }));
