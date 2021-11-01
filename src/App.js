import {
  Container,
  Paper,
  CssBaseline,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import ChooseScreen from "./components/ChooseScreen";

const theme = createMuiTheme({
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
    primary: { main: "#118e16" },
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
          </Paper>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
