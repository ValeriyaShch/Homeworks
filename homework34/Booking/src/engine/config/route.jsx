import Main from "../../ui/pages/Main.jsx";
import About from "../../ui/pages/About.jsx";
import Hotels from "../../ui/pages/Hotels/index.jsx";
export const route = {
  main: {
    element: <Main />,
    path: '/'
  },
  about: {
    element: <About />,
    path: '/about'
  },
  hotels: {
    element: <Hotels />,
    path: '/hotels'
  }
}
