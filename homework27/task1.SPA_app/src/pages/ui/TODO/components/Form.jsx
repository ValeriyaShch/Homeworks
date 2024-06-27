import Button from "./Button.jsx";

function Form(props) {
    const sendForm = (event) => {
        event.preventDefault();
        props.onAdd(event.target.text.value)
    }
    return (
        <form action="#" className="d-flex" onSubmit={sendForm}>
            <input name="text" type="text" className="form-control"/>
            <Button type="submit" className="btn-primary" text="Send" />
        </form>
    )
}

export default Form
