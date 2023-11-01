import './App.css';
import { ThemeProvider } from 'styled-components';
import InputFileUpload from './components/buttons/Upload';

const theme = {
  primary: '#F6F4EB',
  secondary: '#91C8E4',
  accent: '#749BC2',
  text: '#4682A9',
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <InputFileUpload />
    </ThemeProvider>
  );
};

export default App;
