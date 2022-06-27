/** EXTERNAL **/


import React from "react";


/** MAIN **/


export default ({ score }) => {
    return (
        <div className="bg-blue-500 w-[50px] rounded">
            {Array.from({length: score}, (_, i) => <div key={i + 1} className="w-full h-[20px]" />)}
        </div>
    );
}
