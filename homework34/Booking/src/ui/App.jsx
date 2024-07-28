import {Route, Routes} from 'react-router-dom';
import {HistoryRouter as Router} from "redux-first-history/rr6";
import {history} from "../engine/init/store.js";
import {route} from '../engine/config/route.jsx';
import Layout from './components/Layout.jsx'

function App() {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {Object.keys(route).map(
            (item) => <Route element={route[item].element} path={route[item].path} key={item}></Route>
        )}
        </Route>

      </Routes>
    </Router>
  )
}

export default App
