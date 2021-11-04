import {
  Container,
  Paper,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ChooseScreen from "./screens/ChooseScreen";
import View from "./screens/View";
import ReviewScreen from "./screens/ReviewScreen";
import OrderValidation from "./screens/OrderValidation";

const theme = createTheme({
  typography: {
    h1: { fontWeight: "bold" },
    h2: {
      fontSize: "2rem",
      color: "black",
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "white",
    },
    h5: {
      fontWeight: "bold",
      fontSize: "1.3rem",
    },
    h6: {
      fontSize: "1.15rem",
    },
  },
  palette: {
    primary: { main: "#F9F9F9" },
    contrastText: "#ffffff",
  },
});
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xs">
          <Paper>
            <Route path="/" component={HomeScreen} exact={true}></Route>
            <Route path="/choose" component={ChooseScreen} exact={true}></Route>
            <Route path="/review" component={ReviewScreen} exact={true}></Route>
            <Route path="/view" component={View} exact={true}></Route>
            <Route
              path="/validation"
              component={OrderValidation}
              exact={true}
            ></Route>
          </Paper>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
