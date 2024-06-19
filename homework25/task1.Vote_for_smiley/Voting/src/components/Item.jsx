import { Component } from 'react';
import image from '../assets/1.jpg'


class Item extends Component {
    render() {
        const {id, image} = this.props;
        return (
            <img src= {image} width={100}/>
        )
    }
}
export default Item