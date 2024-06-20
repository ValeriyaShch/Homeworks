import {Component} from 'react';
import Header from "./components/Header.jsx";
import Item from "./components/Item.jsx";
import Button from "./components/Button.jsx";
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
                ]

        }
        this.increaseVote =this.increaseVote.bind(this)
    }
    increaseVote(event) {
        event.stopPropagation();
        const selectedId = event.target.dataset.id;

        this.setState((prevState) => {
           let smilesToUpdate = prevState.smiles;
            console.log(`state before Update:`)
            console.log(smilesToUpdate)
            smilesToUpdate.forEach(smile => {
                if (smile.id === +selectedId) {
                    smile.vote+=1;
                }
            })
            console.log(`state after foreach Update:`)
            console.log(smilesToUpdate)
            return {
                smiles: smilesToUpdate
            }
        })
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <main>
                    {this.state.smiles.map((item) => {
                        return <Item key ={item.id} id={item.id} image={item.image} vote={item.vote}
                                     onClick = {this.increaseVote} />
                    })}
                </main>
                <Button text="Show Results" className="btn-primary me-2"/>
                <Button  text="Reset" className="btn-danger"/>
            </div>
        )
    }
}

export default App
