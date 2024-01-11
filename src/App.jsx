import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/screens/home/Home";
import { ThemeProvider } from "styled-components";

const theme = {
  primary: "#F6F4EB",
  secondary: "#2d8bba",
  accent: "#a4b3ea",
  text: "#131e26",
};

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
