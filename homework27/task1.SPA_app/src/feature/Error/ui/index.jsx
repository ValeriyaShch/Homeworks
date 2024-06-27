import {useState} from "react";

function Error() {
    const [theme, setTheme] = useState();
    const onClick = () => {
        setTheme({})

    }
    return (
        <>
            <button onClick={onClick}>Вийти  </button>
            {theme === undefined ? console.log('Error') : theme}
        </>
    )
}

export default Error;