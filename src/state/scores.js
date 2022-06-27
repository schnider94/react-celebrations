/** LOCAL **/


import { atom, selector } from 'recoil';


/** HELPER **/


const scoresState = atom({
    key: 'scoresState',
    default: [],
});

const highScoreSelector = selector({
    key: 'highScoreSelector',
    get: ({get}) => get(scoresState),
    set: ({get, set}, score) => {
        const scores = [...get(scoresState), score]
            .sort((a, b) => (a.score > b.score) ? -1 : 1)
            .slice(0, 10);

        set(scoresState, scores);
    }
  });


/** MAIN **/


export default highScoreSelector;
