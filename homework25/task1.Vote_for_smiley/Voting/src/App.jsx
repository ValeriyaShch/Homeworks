import {Component} from 'react';
import Header from "./components/Header.jsx";
import Item from "./components/Item.jsx";
import Button from "./components/Button.jsx";
import Winner from "./components/Winner.jsx";
import hug from './assets/1.jpg';
import shy from './assets/2.jpg';
import smile from './assets/3.jpg';
import wink from './assets/4.jpg';
import suspicious from './assets/5.jpg';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smiles:
                [
                    {id: 1, image: hug, vote: 0},
                    {id: 2, image: shy, vote: 0},
                    {id: 3, image: smile, vote: 0},
                    {id: 4, image: wink, vote: 0},
                    {id: 5, image: suspicious, vote: 0},
                ],
            isResultVisible: false,
            maxVote: 0,
            bestImage: null

        }
        this.increaseVote =this.increaseVote.bind(this)
        this.resetVotes =this.resetVotes.bind(this)
        this.showWinner =this.showWinner.bind(this)
    }

    componentDidMount() {
        const smilesInfo = JSON.parse(localStorage.getItem('smiles'))
        if (!smilesInfo)
            localStorage.setItem('smiles', JSON.stringify(smilesInfo))
        else
            this.setState(smilesInfo)

    }

    
    increaseVote(event) {
        event.stopPropagation();
        const selectedId = event.target.dataset.id;

        this.setState((prevState) => {
           let smilesToUpdate = prevState.smiles;
           let checkMaxVote;
           let currentImage;
            smilesToUpdate.forEach(smile => {
                if (smile.id === +selectedId) {
                    smile.vote++;
                    checkMaxVote = smile.vote;
                    currentImage = smile.image;
                }
            })

            const updatedState = {
                ...prevState,
                smiles: smilesToUpdate,
                maxVote: (checkMaxVote>prevState.maxVote) ? checkMaxVote : prevState.maxVote,
                bestImage: (checkMaxVote>prevState.maxVote) ? currentImage : prevState.bestImage
            }

            localStorage.setItem('smiles', JSON.stringify(updatedState));

            return updatedState
        })
    }

    resetVotes() {
        this.setState((prevState) => {
            const resetSmiles = prevState.smiles.map(smile => {
               smile.vote=0;
               return smile
            })
            const updatedState= {
                ...prevState,
                smiles: resetSmiles,
                isResultVisible: false,
                maxVote: 0,
                bestImage: null
            }

            localStorage.setItem('smiles', JSON.stringify(updatedState));

            return updatedState;
        })
    }

    showWinner() {
        this.setState((prevState) => {
            const updatedState= {
                ...prevState,
                isResultVisible: true
            }
            localStorage.setItem('smiles', JSON.stringify(updatedState));

            return updatedState
        })
    }

    render() {
        return (
            <div className="container center">
                <Header/>
                <main className="mb-2">
                    {this.state.smiles.map((item) => {
                        return <Item key ={item.id} id={item.id} image={item.image} vote={item.vote}
                                     onClick = {this.increaseVote} />
                    })}
                </main>
                <Button text="Show Results" onClick = {this.showWinner} className="btn-primary me-2"/>
                <Button text="Reset" onClick ={this.resetVotes}  className="btn-danger"/>

                { this.state.isResultVisible ? <Winner key={0} vote={this.state.maxVote} image={this.state.bestImage} /> : null}
            </div>
        )
    }
}

export default App
