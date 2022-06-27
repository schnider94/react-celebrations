/** EXTERNAL **/


import { useCallback, useEffect, useRef } from 'react';


/** HELPER **/


const debouncer = handler => {
    let timer;

    return props => {
        clearTimeout(timer);
        timer = setTimeout(() => handler(props), 1000);
    };
}


/** MAIN **/


export default (handler, props) => {
    const handlerRef = useRef(handler);

    useEffect(() => {
        handlerRef.current = handler;
    }, [handler])

    const debounce = useCallback(debouncer(props => handlerRef.current(props)), [])

    useEffect(() => debounce(...props), props);

    return debounce;
};
