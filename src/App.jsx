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
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
library.add(faEnvelope, faKey, faListAlt, faThumbsUp);

function App() {
  const [dataCommics, setDataCommics] = useState([]);
  const [infosUser, setInfosUser] = useState({
    token: "",
    id: "",
    username: "",
    favorites: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        // "https://site--marvel--m4zrv4ywn86q.code.run/comics"
        "http://localhost:3000/comics"
      );
      // console.log(response.data);
      setDataCommics(response.data);
    };
    fetchData();
  }, []);

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
          <Route path="/login" element={<Login />} />
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
