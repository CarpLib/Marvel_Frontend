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
  faHeart,
  faEnvelope,
  faKey,
  faListAlt,
  faThumbsUp,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import Cookies from "js-cookie";
import axios from "axios";
library.add(faEnvelope, faKey, faListAlt, faThumbsUp, faHeart, faBookmark);

function App() {
  const [infosUser, setInfosUser] = useState({
    token: "",
    id: "",
    username: "",
    favorites: [{ comics: [] }, { characters: [] }],
  });

  useEffect(() => {
    const token = Cookies.get("Marvel");
    // console.log(token);
    if (token) {
      try {
        const fetchData = async () => {
          const response = await axios.get(
            `https://site--marvel--m4zrv4ywn86q.code.run/favorites/`,
            // `http://localhost:3000/favorites/`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          // console.log(response.data);
          const infosUserClone = { ...infosUser };
          infosUserClone.token = token;
          infosUserClone.id = response.data._id;
          infosUserClone.username = response.data.account.username;
          infosUserClone.favorites = response.data.favorites;
          setInfosUser(infosUserClone);
        };
        fetchData();
      } catch (error) {
        console.log(error.message);
      }
    }
  }, []);

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
          <Route
            path="/characters"
            element={
              <Characters infosUser={infosUser} setInfosUser={setInfosUser} />
            }
          />
          <Route
            path="/comics"
            element={
              <Comics infosUser={infosUser} setInfosUser={setInfosUser} />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites infosUser={infosUser} setInfosUser={setInfosUser} />
            }
          />
          <Route path="/character/:id" element={<Character />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
