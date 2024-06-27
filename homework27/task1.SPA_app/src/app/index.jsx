import '../shared/model/index.css';
import {ThemeContext, themes} from "../shared/model/themeContext.js";
import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "../widgets/Header.jsx";
import Main from "../pages/ui/Main.jsx";
import Contact from "../pages/ui/Contact.jsx";
import About from "../pages/ui/About.jsx";
import ErrorBoundary from "../feature/ErrorBoundary/ui"
import {routes} from "../shared/config/routes.js";

function App() {
    const theme = useState(themes.light);
    return (
        <ThemeContext.Provider value={theme}>
            <BrowserRouter>
                <ErrorBoundary>
                    <div className='content' style={{background: theme[0].background}}>
                        <Header/>
                        <main>
                            <Routes>
                                <Route path={routes.main} element={<Main/>}></Route>
                                <Route path={routes.contact} element={<Contact/>}></Route>
                                <Route path={routes.about} element={<About/>}></Route>
                            </Routes>
                        </main>
                    </div>
                </ErrorBoundary>

            </BrowserRouter>
        </ThemeContext.Provider>
    )
}

export default App