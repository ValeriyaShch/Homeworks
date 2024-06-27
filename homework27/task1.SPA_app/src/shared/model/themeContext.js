import {createContext} from "react";

export const themes = {
    light: {
        color: '#1d011f',
        background: 'rgba(246,198,241,0.99)'
    },
    dark: {
        color: 'white',
        background: 'grey'
    }
}

export const ThemeContext = createContext();