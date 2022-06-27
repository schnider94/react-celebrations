/** EXTERNALS **/


import React from "react";


/** LOCALS **/


import ScoreBar from "./ScoreBar";


/** HELPERS **/


const Score = ({ score }) => {
    return (
        <span className="font-bold text-lg">
            {score}
        </span>
    );
}


/** MAIN **/


export default ({ score }) => {
    return (
        <div className="flex flex-col flex-end">
            <div className="text-center w-full">
                <Score score={score} />
            </div>
            <ScoreBar score={score} />
        </div>
    );
}
