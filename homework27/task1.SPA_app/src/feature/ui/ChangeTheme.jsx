import {useContext} from "react";
import {ThemeContext, themes} from "../../shared/model/themeContext.js";

function ChangeTheme() {
    const [theme, setTheme] = useContext(ThemeContext);
    const onClick = () => {
        if (theme.color === '#1d011f') {
            setTheme(themes.dark)
        } else {
            setTheme(themes.light)
        }
    }
    return (
        <button onClick={onClick}>Змінити тему</button>
    )
}

export default ChangeTheme;