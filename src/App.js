import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Aleart from "./components/Aleart";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAleart] = useState(null);

  const showAleart = (message, type) => {
    setAleart({
      msg: message,
      type: type,
    });
    setTimeout(() => setAleart(null), 2000);
  };

  const togglehandler = () => {
    if (mode === "light") {
      setMode("dark");
      console.log(mode);
      document.body.style.backgroundColor = "#162366";
      showAleart("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAleart("Light mode enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="Tables Calculator"
          mode={mode}
          toggle={togglehandler}
        />
        <Aleart aleart={alert} />

        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAleart={showAleart}
                  heading="Enter the text below "
                  mode={mode}
                />
              }
            ></Route>
            <Route path="/multiply" element={<About />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
