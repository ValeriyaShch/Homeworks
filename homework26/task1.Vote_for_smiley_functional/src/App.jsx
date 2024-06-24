import React, {useEffect, useState} from 'react';
import Header from './components/Header.jsx';
import Item from './components/Item.jsx';
import Button from './components/Button.jsx';
import Winner from './components/Winner.jsx';
import defaultState from './state/defaultState.js';

function App() {
    const [smilesData, setSmilesData] = useState(defaultState);

    useEffect(() => {
        const storageData = JSON.parse(localStorage.getItem('smiles'));
        if (storageData) {
            setSmilesData(storageData);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('smiles', JSON.stringify(smilesData));
    }, [smilesData]);

    const increaseVote = (event) => {
        event.stopPropagation();
        const selectedId = event.target.dataset.id;

        const updatedSmiles = smilesData.smiles.map((smile) => {
            if (smile.id === +selectedId) {
                return {...smile, vote: smile.vote + 1};
            }
            return smile;
        });

        const checkMaxVote = Math.max(...updatedSmiles.map((smile) => smile.vote));
        const bestImage = updatedSmiles.find((smile) => smile.vote === checkMaxVote)?.image;

        setSmilesData({
            ...smilesData,
            smiles: updatedSmiles,
            maxVote: checkMaxVote,
            bestImage,
        })
    }
    const resetVotes = () => {
        setSmilesData(defaultState);
    }
    const showWinner = () => {
        setSmilesData({
            ...smilesData,
            isResultVisible: true,
        });
    }

    return (
        <div className="container center">
            <Header/>
            <main className="mb-2">
                {smilesData.smiles.map((item) => (
                    <Item key={item.id} id={item.id} image={item.image} vote={item.vote}
                          onClick={increaseVote}/>
                ))}
            </main>
            <Button text="Show Results" onClick={showWinner} className="btn-primary me-2"/>
            <Button text="Reset" onClick={resetVotes} className="btn-danger"/>

            {smilesData.isResultVisible && <Winner key={0} vote={smilesData.maxVote} image={smilesData.bestImage}/>}
        </div>
    );
}

export default App;

