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
import Signup from "./pages/signup/index";
import Login from "./pages/login/index";

// FontAwasome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faListAlt,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import Cookies from "js-cookie";
library.add(faEnvelope, faKey, faListAlt, faThumbsUp);

function App() {
  const [infosUser, setInfosUser] = useState({
    token: "",
    id: "",
    username: "",
    favoritesCharacters: [],
  });

  const cookie = Cookies.get("Marvel");
  if (cookie && !infosUser.token) {
    const token = cookie;
    const infosUserClone = { ...infosUser };
    infosUserClone.token = token;
    setInfosUser(infosUserClone);
  }

  return (
    <div className="App">
      <Router>
        <Header infosUser={infosUser} setInfosUser={setInfosUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signup"
            element={
              <Signup infosUser={infosUser} setInfosUser={setInfosUser} />
            }
          />
          <Route
            path="/login"
            element={
              <Login infosUser={infosUser} setInfosUser={setInfosUser} />
            }
          />
          <Route path="/characters" element={<Characters />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/character/:id" element={<Character />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
