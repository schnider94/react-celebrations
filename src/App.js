/** EXTERNAL **/


import React from 'react';
import { RecoilRoot } from 'recoil';


/** LOCAL **/


import Root from 'components/Root';
import Celebrations from 'components/Celebrations';


/** MAIN **/


export default function App() {
    return (
        <RecoilRoot>
            <Celebrations>
                <Root />  
            </Celebrations>
        </RecoilRoot>
    )
}
