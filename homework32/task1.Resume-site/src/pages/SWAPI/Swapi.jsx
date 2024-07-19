import Form from "./ui/components/Form.jsx";
import Card from "./ui/components/Card.jsx";
import {Provider} from "react-redux";
import {store} from "./core/redux/store.js";

function Swapi() {
    return (
        <Provider store={store}>
            <div className="container">
                <Form/>
                <Card/>
            </div>
        </Provider>
    )
}

export default Swapi
