import { useState, useEffect } from "react";
function useDebounce(value, delay) {

    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
        setDebouncedValue(value);
        }, delay);

        return () => {
        clearTimeout(handler);
        };

    }, [value, delay]);

    return debouncedValue;
    }

export default useDebounce;



    // User types
    // ↓
    // value changes
    // ↓
    // timer starts
    // ↓
    // if user types again
    // timer resets
    // ↓
    // after 500ms
    // value updates