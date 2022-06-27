/** EXTERNAL **/


import { atom } from 'recoil';


/** HELPER **/


const celebrationState = atom({
    key: 'celebrationState',
    default: [],
});


/** MAIN **/


export default celebrationState;
