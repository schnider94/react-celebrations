/** EXTERNALS **/


import React, { createContext } from 'react';


/** HELPERS **/


const initialContext = {
    celebrations: [],
    onFinished: () => null,
    types: {},
};


/** MAIN **/


export const Context = createContext(initialContext);

export default props => {
    const {
        celebrations,
        children,
        onFinished,
        types,
    } = props;

    return (
        <Context.Provider value={{ celebrations, onFinished, types }}>
            {children}
        </Context.Provider>
    );
}
