import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Screens/Home";
import Dashboard from "./components/Screens/Dashboard";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./store";

const theme = {
  primary: "#F6F4EB",
  secondary: "#91C8E4",
  accent: "#749BC2",
  text: "#4682A9",
};

const App = () => {
  return (
    <>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route
              path="/dashboard"
              exact
              element={<Dashboard/>}
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
    </>
  );
};

export default App;
