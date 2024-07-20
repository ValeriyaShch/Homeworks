import Header from "./ui/components/Header.jsx";
import Input from "./ui/components/Input.jsx";
import ItemsList from "./ui/components/ItemsList.jsx";
import ClearSection from "./ui/components/ClearSection.jsx";

function TODO() {
    return (
        // <Provider store={store}>
            <div className="container">
                <Header/>
                <Input/>
                <ItemsList/>
                <ClearSection/>
            </div>
        // </Provider>
    );
}

export default TODO
