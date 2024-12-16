import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
export const Input = ({ label, ...props }) => {
    const spanRef = useRef(null);
    const inputRef = useRef(null);
    const updateInputWidth = () => {
        if (spanRef.current && inputRef.current) {
            spanRef.current.textContent = inputRef.current.value || props.placeholder || '';
            inputRef.current.style.width = `${spanRef.current.offsetWidth * 0.84}px`;
        }
    };
    useEffect(() => {
        updateInputWidth();
    }, []);
    if (props.disabled) {
        return (_jsxs("div", { className: "value", children: [_jsx("p", { children: label }), _jsx("span", { ref: spanRef, style: {
                        position: 'absolute',
                        visibility: 'hidden',
                        whiteSpace: 'pre',
                        fontSize: 'inherit',
                        fontFamily: 'inherit',
                    } }), _jsx("div", { children: props.value })] }));
    }
    return (_jsxs("div", { className: "value", children: [_jsx("p", { children: label }), _jsx("span", { ref: spanRef, style: {
                    position: 'absolute',
                    visibility: 'hidden',
                    whiteSpace: 'pre',
                    fontSize: 'inherit',
                    fontFamily: 'inherit',
                } }), _jsx("input", { ref: inputRef, ...props, className: 'alwaysOutline', onInput: updateInputWidth })] }));
};
