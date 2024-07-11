import Header from "./components/Header.jsx";
import Apiform from "./components/Apiform.jsx";
import Apiinfo from "./components/Apiinfo.jsx";
import {ResetAllButton} from "./components/ResetAllButton.jsx";
import {Provider} from "react-redux";
import {store} from "../core/store.js";


function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <Header/>
                <Apiform/>
                <Apiinfo/>
                <ResetAllButton/>
            </div>
        </Provider>

    )
}

export default App
