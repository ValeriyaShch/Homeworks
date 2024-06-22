import React, {Component} from 'react';
import Header from './components/Header.jsx';
import Item from './components/Item.jsx';
import Button from './components/Button.jsx';
import Winner from './components/Winner.jsx';
import defaultState from './state/defaultState.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = JSON.parse(localStorage.getItem('smiles')) || defaultState;
        this.increaseVote = this.increaseVote.bind(this);
        this.resetVotes = this.resetVotes.bind(this);
        this.showWinner = this.showWinner.bind(this);
    }

    componentDidUpdate() {
        localStorage.setItem('smiles', JSON.stringify(this.state));
    }

    increaseVote(event) {
        event.stopPropagation();
        const selectedId = event.target.dataset.id;

        this.setState((prevState) => {
            const updatedSmiles = prevState.smiles.map((smile) => {
                if (smile.id === +selectedId) {
                    return {...smile, vote: smile.vote + 1};
                }
                return smile;
            });

            const checkMaxVote = Math.max(...updatedSmiles.map((smile) => smile.vote));
            const bestImage = updatedSmiles.find((smile) => smile.vote === checkMaxVote)?.image;

            return {
                ...prevState,
                smiles: updatedSmiles,
                maxVote: checkMaxVote,
                bestImage,
            };
        });
    }

    resetVotes() {
        this.setState(defaultState);
    }

    showWinner() {
        this.setState((prevState) => ({
            ...prevState,
            isResultVisible: true,
        }));
    }

    render() {
        return (
            <div className="container center">
                <Header/>
                <main className="mb-2">
                    {this.state.smiles.map((item) => (
                        <Item key={item.id} id={item.id} image={item.image} vote={item.vote}
                              onClick={this.increaseVote}/>
                    ))}
                </main>
                <Button text="Show Results" onClick={this.showWinner} className="btn-primary me-2"/>
                <Button text="Reset" onClick={this.resetVotes} className="btn-danger"/>

                {this.state.isResultVisible && <Winner key={0} vote={this.state.maxVote} image={this.state.bestImage}/>}
            </div>
        );
    }
}

export default App;
