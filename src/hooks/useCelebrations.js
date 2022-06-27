/** EXTERNAL **/


import { useRecoilState } from 'recoil';


/** LOCAL **/


import celebrationsState from 'state/celebrations';


/** HELPER **/


let id = 0;


/** MAIN **/


export default () => {
    const [celebrations, setCelebrations] = useRecoilState(celebrationsState);

    const celebrate = ({ target, type }) => {
        setCelebrations(celebs => [
            ...celebs,
            {
                id: id++,
                target,
                type,
            }
        ]);
    };

    const remove = id => {
        setCelebrations(celebs => celebs.filter(celeb => celeb.id !== id));
    };

    return {
        celebrations,
        celebrate,
        remove,
    };
};
