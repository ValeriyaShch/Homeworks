import Header from "./components/Header.jsx";
import Input from "./components/Input.jsx";
import {Provider} from "react-redux";
import {store} from "./core/store.js";
import ItemsList from "./components/ItemsList.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <Header/>
                <Input/>
                <ItemsList/>
                <Footer/>
            </div>
        </Provider>
    );
}

export default App
