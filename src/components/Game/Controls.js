/** EXTERNAL **/


import React, { useState } from 'react';


/** LOCAL **/


import useScores from 'hooks/useScores';
import useDebouncer from 'hooks/useDebouncer';


/** MAIN **/


export default () => {
    const [counter, setCounter] = useState(0);
    const [_, addScore] = useScores();

    useDebouncer(newScore => {
        if (!newScore) return;

        setCounter(0);
        addScore(newScore);
    }, [counter]);

    const onCount = () => setCounter(curr => curr + 1);

    return (
        <button
            className="text-xl bg-red-500 px-4 py-2 text-white rounded-full hover:bg-red-600"
            onClick={onCount}
        >
            Count {counter}
        </button>
    );
};
