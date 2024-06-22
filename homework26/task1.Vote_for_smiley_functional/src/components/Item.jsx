import { Component } from 'react';

class Item extends Component {
    render() {
        const { id, image, vote, onClick } = this.props;

        return (
            <>
                <img data-id={id} src={image} onClick={onClick} width={200}/>
                <span>{vote}</span>
            </>

        )
    }
}
export default Item