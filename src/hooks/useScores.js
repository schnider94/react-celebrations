/** EXTERNAL **/


import { useRecoilState } from 'recoil';


/** LOCAL **/


import scoresState from 'state/scores';


/** HELPER **/


let id = 1;


/** MAIN **/


export default () => {
    const [scores, addScore] = useRecoilState(scoresState);

    const add = newScore => {
        const newId = id++;
        const currentHighScore = scores[0]?.score ?? 0;

        addScore({
            id: newId,
            score: newScore
        });

        return {
            id: newId,
            isNewHighScore: newScore > currentHighScore,
        };
    };

    return [scores, add];
}
