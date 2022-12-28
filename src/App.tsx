import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "../src/styles/App.css";
import { ReactComponent as BorderRight } from "./assets/SVGs/border.svg";
import { BrowserRouter } from "react-router-dom";
import AnimatedSwitch from "../src/components/AnimatedSwitch/AnimatedSwitch";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="main-container">
          <BorderRight className="border-right" />
          <BorderRight className="border-left" />
          <main>
            <Header />
            <AnimatedSwitch />
            <Footer />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
