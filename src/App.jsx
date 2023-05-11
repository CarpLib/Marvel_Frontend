import "./App.css";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home/index";
import Characters from "./pages/characters/index";
import Comics from "./pages/comics/index";
import Favorites from "./pages/Favorites/index";
import Character from "./pages/character/index";

// FontAwasome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faListAlt,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
library.add(faEnvelope, faKey, faListAlt, faThumbsUp);

function App() {
  const [dataCommics, setDataCommics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        "https://site--marvel--m4zrv4ywn86q.code.run/comics"
      );
      setDataCommics(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route
            path="/comics"
            element={<Comics dataCommics={dataCommics} />}
          />
          <Route path="/favorites" element={<Favorites />} />
          <Route
            path="/character/:id"
            element={<Character dataCommics={dataCommics} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
