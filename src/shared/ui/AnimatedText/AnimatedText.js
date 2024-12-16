import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { DEFAULT_INTERVAL } from './config';
const createAnimatedComponent = (Tag) => {
    return ({ text, interval: _interval = DEFAULT_INTERVAL, delay = 0, ...props }) => {
        const [displayedIndex, setDisplayedIndex] = useState(0);
        const TAG = Tag;
        useEffect(() => {
            let interval = 0;
            setTimeout(() => {
                setInterval(() => {
                    setDisplayedIndex((prev) => {
                        if (prev === text.length) {
                            clearInterval(interval);
                            return prev;
                        }
                        return prev + 1;
                    });
                }, _interval);
            }, delay);
            return () => clearInterval(interval);
        }, [text]);
        return _jsx(TAG, { ...props, children: text.slice(0, displayedIndex) });
    };
};
export const AnimatedText = {
    h1: createAnimatedComponent('h1'),
    h2: createAnimatedComponent('h2'),
    p: createAnimatedComponent('p'),
};
