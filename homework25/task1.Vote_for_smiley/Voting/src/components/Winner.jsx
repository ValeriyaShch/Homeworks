import {Component} from "react";

class Winner extends Component {
    render() {
        const { image, vote } = this.props;
        return (
            <div className="center mt-4">
                <h2>Результати голосування:</h2>
                <h3>Переможець:</h3>
                <img src={image} width={200}/>
                <p>Кількість голосів: {vote}</p>
            </div>
        )
    }
}

export default Winner