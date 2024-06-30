import { useState } from 'react';

const Form = ( props ) => {
    const [taskText, setTaskText] = useState('');

    const sendForm = (event) => {
        event.preventDefault();
        props.onSubmit(event.target.text.value)
        setTaskText('')
    }

    return (
        <form className="form" onSubmit={sendForm}>
            <input
                type="text"
                name="text"
                required
                className="form__input"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <button type="submit" className="form__btn">
                Додати
            </button>
        </form>
    );
};

export default Form;