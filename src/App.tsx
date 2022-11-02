import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "../src/styles/App.css";
import { ReactComponent as BorderRight } from "./assets/border.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMePage from "./pages/AboutMePage";
import ContactPage from "./pages/ContactPage";
import WorkPage from "./pages/WorkPage";
import SkillsPage from "./pages/SkillsPage";
import MainPage from "./pages/MainPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="main-container">
          <BorderRight className="border-right" />
          <BorderRight className="border-left" />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/about-me" element={<AboutMePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/skills" element={<SkillsPage />} />
            </Routes>
            <Footer />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
