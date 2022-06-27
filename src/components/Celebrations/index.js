/** EXTERNAL **/


import React from 'react';
import { Root as CelebrationRoot } from 'react-celebrations';


/** LOCAL **/


import useCelebrations from 'hooks/useCelebrations';


/** HELPER **/


const celebrationTypes = {

};


/** MAIN **/


export default ({ children }) => {
    const { celebrations, remove } = useCelebrations();

    return (
        <CelebrationRoot
            celebrations={celebrations}
            onFinished={remove}
            types={celebrationTypes}
        >
            {children}
        </CelebrationRoot>
    );
};
