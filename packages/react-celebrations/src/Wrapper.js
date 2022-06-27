/** EXTERNALS **/


import React, { useEffect, useRef } from 'react';


/** MAIN **/


export default props => {
    const {
        Component,
        id,
        onFinished,
        ...payload
    } = props;

    const onFinishedRef = useRef();
    const idRef = useRef();

    useEffect(() => {
        onFinishedRef.current = onFinished;
        idRef.current = id;
    }, [id, onFinished]);

    return (
        <Component
            onFinished={() => onFinishedRef.current(idRef.current)}
            {...payload}
        />
    );
}
