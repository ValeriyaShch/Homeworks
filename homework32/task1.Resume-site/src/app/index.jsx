import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "../widgets/Header.jsx";
import CV from "../pages/CV/CV.jsx";
import Footer from "../widgets/Footer.jsx";
import ErrorBoundary from "../feature/ErrorBoundary/ui/index.jsx"
import {routes} from "../shared/config/routes.js";
import TODO from "../pages/TODO/TODO.jsx";
import Swapi from "../pages/SWAPI/Swapi.jsx";
import {Container} from "@mui/material";
// import {store} from "../pages/SWAPI/core/redux/store.js";
import {Provider} from "react-redux";
import {store} from "../shared/core/redux/store.js";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <ErrorBoundary>
                    <div className='content' style={{
                        display: 'flex', flexDirection: 'column',
                        minHeight: '100vh'
                    }}>
                        <Header/>
                        <main style={{flexGrow: 1}}>
                                <Container maxWidth="lg">
                                    <Routes>
                                        <Route path={routes.main} element={<CV/>}></Route>
                                        <Route path={routes.todo} element={<TODO/>}></Route>
                                        <Route path={routes.swapi} element={<Swapi/>}></Route>
                                    </Routes>
                                </Container>

                        </main>
                        <Footer/>
                    </div>
                </ErrorBoundary>
            </Provider>
        </BrowserRouter>
    )
}

export default App