import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import Activities from "./pages/activities";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./appStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    // Overall Material UI Theme
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App" style={{ minHeight: "500px" }}>
          {/* Universal header and navbar */}
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
          </Routes>
          {/* Pages */}
          {/* <Home /> */}
          {/* <ClubCalendar /> */}
          {/* <CalendarPage /> */}
          {/* Universal footer */}
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
