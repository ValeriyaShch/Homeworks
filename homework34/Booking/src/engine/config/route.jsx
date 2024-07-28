import Main from "../../ui/pages/Main.jsx";
import About from "../../ui/pages/About.jsx";
import Index from "../../ui/pages/Hotels";
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
    element: <Index />,
    path: '/hotels'
  }
}
