import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import { ThemeProvider } from '@mui/material/styles';
import theme from './appStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
