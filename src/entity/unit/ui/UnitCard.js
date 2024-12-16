import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './styles.scss';
import { Link } from 'react-router-dom';
export const UnitCard = ({ preview, title, description, rating, url, author, name }) => {
    return (_jsx(Link, { to: url, children: _jsxs("section", { className: 'card-container hover-shadow', children: [_jsxs("div", { className: 'head', children: [_jsx("h1", { children: title }), _jsx("img", { className: 'preview', src: preview, alt: name })] }), _jsxs("div", { className: 'tags', children: [_jsx("p", { className: 'tag', children: author }), _jsx("p", { className: 'tag-success', children: rating })] }), _jsx("p", { className: 'description', children: description })] }) }, name));
};
