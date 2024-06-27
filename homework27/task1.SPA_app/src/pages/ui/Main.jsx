import { useEffect, useState} from "react";
import List from "./TODO/components/List.jsx";
import Header from "./TODO/components/Header.jsx";
import Form from "./TODO/components/Form.jsx";

function Main() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const oldItems = JSON.parse(localStorage.getItem('items'));
        setItems(oldItems || []);
        console.log(items);
    }, []);

    const addItem = (value) => {
        const oldItems = JSON.parse(localStorage.getItem('items'))
        let newArray = oldItems === null ? [value] : [...oldItems, value];
        setItems(newArray);
        localStorage.setItem('items', JSON.stringify(newArray));
    }

    return (
        <>
            <Header/>
            <main className="container">
                <Form onAdd={addItem}/>
                <List values={items}/>
            </main>
        </>
    )
}
export default Main;