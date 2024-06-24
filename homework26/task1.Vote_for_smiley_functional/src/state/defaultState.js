import hug from "../assets/1.jpg";
import shy from "../assets/2.jpg";
import smile from "../assets/3.jpg";
import wink from "../assets/4.jpg";
import suspicious from "../assets/5.jpg";

const defaultState = {
    smiles: [
        {id: 1, image: hug, vote: 0},
        {id: 2, image: shy, vote: 0},
        {id: 3, image: smile, vote: 0},
        {id: 4, image: wink, vote: 0},
        {id: 5, image: suspicious, vote: 0},
    ],
    isResultVisible: false,
    maxVote: 0,
    bestImage: null,
};

export default defaultState