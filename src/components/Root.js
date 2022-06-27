/** EXTERNAL **/


import React from 'react';


/** LOCAL **/


import Controls from './Game/Controls';
import GameScores from './Chart/GameScores';


/** MAIN **/


export default () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-y-2">
            <GameScores />
            <Controls />
        </div>
    );
};
