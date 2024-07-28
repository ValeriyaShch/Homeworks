import {Outlet} from 'react-router-dom';
import {Header} from "./Header/";
import {ThemeProvider, createTheme, CssBaseline, Container} from "@mui/material";
import {orange} from '@mui/material/colors'
import {Provider} from "react-redux";
import {store} from "../../engine/init/store.js";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500]
    }
  }
})

export default function Layout() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Header/>
        <Container component="main" sx={{ marginTop: '15px' }}>
          <Outlet/>
        </Container>
      </ThemeProvider>
    </Provider>

  )
}
