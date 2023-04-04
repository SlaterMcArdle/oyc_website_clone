import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import CalendarPage from './pages/calendar';
import Header from './components/header';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './appStyles';
import ClubCalendar from './components/calendar';

function App() {
  return (
    // Overall Material UI Theme
    // <ThemeProvider theme={theme}>
      <div className="App" style={{minHeight: '500px'}}>
        {/* Universal header and navbar */}
        {/* <Header /> */}
        {/* <Navbar /> */}
        {/* Pages */}
        {/* <Home /> */}
        <ClubCalendar />
        {/* <CalendarPage /> */}
        {/* Universal footer */}
        {/* <Footer /> */}
      </div>
    // </ThemeProvider>
  );
}

export default App;
