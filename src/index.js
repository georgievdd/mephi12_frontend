import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import { App } from './app/App';
createRoot(document.getElementById('root')).render(
// <StrictMode>
_jsx(App, {})
// </StrictMode>
);
