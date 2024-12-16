import { cloneElement } from "react";
import { DEFAULT_INTERVAL } from "./config";
const asArray = (children) => {
    if (!Array.isArray(children)) {
        return [children];
    }
    return children;
};
const isAnimatedTextItem = (item) => !!item?.props?.text;
export const AnimatedTextScope = ({ children }) => {
    const items = asArray(children).filter(isAnimatedTextItem);
    let reducedDelay = 0;
    return (items.map((item) => {
        const oldDelay = item.props.delay ?? 0;
        const interval = item.props.interval ?? DEFAULT_INTERVAL;
        const { length } = item.props.text;
        const newProps = {
            ...item.props,
            delay: oldDelay + reducedDelay,
        };
        reducedDelay += oldDelay + interval * length;
        return cloneElement(item, newProps);
    }));
};
