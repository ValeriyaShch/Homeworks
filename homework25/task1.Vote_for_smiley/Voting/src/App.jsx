import { Component } from 'react';
import Header from "./components/Header.jsx";
import Item from "./components/Item.jsx";

class App extends Component {
  render() {
    return (
        <div className="container">
            <Header/>
            <Item id = "1" image = "../assets/1.jpg"/>
        </div>
    )
  }
}

export default App
