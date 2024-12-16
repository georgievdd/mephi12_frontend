import { useState } from 'react';
export const useInput = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);
    const [disabled, setDisabled] = useState(false);
    const onChange = (e) => {
        setValue(e.target.value);
    };
    const set = (t) => {
        setValue(t);
    };
    return {
        value,
        onChange,
        set,
        disabled,
        setDisabled,
    };
};
