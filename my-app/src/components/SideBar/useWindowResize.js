import React, {useEffect, useState} from 'react';

// Debounce function
function debounce(fn, delay) {
    let timerId;
    return function (...args) {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn(...args);
            timerId = null;
        }, delay);
    };
}
// Custom Hook for window resize
export function useWindowResize(initialValue, delay) {
    const [isIconOnly, setIsIconOnly] = useState(initialValue);

    useEffect(() => {
        const handleResize = debounce(() => {
            const newValue = window.innerWidth <= 880;
            if (isIconOnly !== newValue) {
                setIsIconOnly(newValue);
            }
        }, delay);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isIconOnly, delay]);

    return isIconOnly;
}