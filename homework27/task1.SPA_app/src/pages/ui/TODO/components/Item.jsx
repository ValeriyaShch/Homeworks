import Button from "./Button.jsx";

function Item(props) {
    return (
        <li className="d-flex listitem justify-content-between mb-2 mt-2">
            <span>{props.text}</span>
            <div>
                <Button className="btn-success me-2" text="Done" />
                <Button className="btn-danger" text="Delete" />
            </div>
        </li>
    )
}

export default Item
