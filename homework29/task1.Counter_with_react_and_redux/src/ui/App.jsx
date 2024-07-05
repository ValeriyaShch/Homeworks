import {Provider} from "react-redux";
import Counter from "../components/Counter.jsx";
import ButtonIncrement from "../components/ButtonIncrement.jsx";
import ButtonDecrement from "../components/ButtonDecrement.jsx";
import {store} from "../core/store.js";

function App() {
    return (
        <Provider store={store}>
            <div style={{textAlign: "center"}}>
                <Counter/>
                <ButtonIncrement/>
                <ButtonDecrement/>
            </div>
        </Provider>
    )
}

export default App
