
const toComponent = lottie => `
    import React from 'react';
    import { Player } from '@lottiefiles/react-lottie-player';
    export default props => {
        return (
            <Player
                src={${lottie}}
                style={{width:"100%",height:"100%"}}
                {...props}
            />
        );
    };
`;

module.exports = function (source) {
    return toComponent(source);
}
