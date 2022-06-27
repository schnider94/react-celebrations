/** EXTERNALS **/


import React from 'react';


/** LOCALS **/


import { Context } from './Root';
import Wrapper from './Wrapper';


/** HELPER **/


const Consumer = ({ payload, target }) => {
    return (
        <Context.Consumer>
            {({ celebrations, onFinished, types }) => {
                const celebration = celebrations.find(celebration => celebration.target === target);
                const Component = types[celebration?.type];

                if (!celebration) return null;

                return (
                    <Wrapper
                        Component={Component}
                        id={celebration.id}
                        onFinished={onFinished}
                        {...payload}
                    />
                );
            }}
        </Context.Consumer>
    );
};


/** MAIN **/


export default props => {
    const {
        children,
        target,
        ...payload
    } = props;

    return (
        <>
            <Consumer
                payload={payload}
                target={target}
            />
            {children}
        </>
    );
}
