import "./App.css";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";

const theme = {
	primary: "#F6F4EB",
	secondary: "#91C8E4",
	accent: "#749BC2",
	text: "#4682A9",
};

const App = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Home />
			</ThemeProvider>
		</>
	);
};

export default App;
