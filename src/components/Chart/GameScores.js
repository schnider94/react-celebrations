/** EXTERNALS **/


import React from "react";
import { useRecoilValue } from "recoil";


/** LOCAL **/


import scoresState from 'state/scores';
import GameScore from "./GameScore";


/** MAIN **/


export default () => {
    const scores = useRecoilValue(scoresState);

    return (
        <div className="w-full flex flex-row-reverse flex-reverse justify-center items-end gap-x-4">
            {scores.map(score => <GameScore key={score.id} {...score} />)}
        </div>
    );
}