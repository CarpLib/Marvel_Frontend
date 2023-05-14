import { useState } from "react";
import "./signup.scss";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
export default function Index({ infosUser, setInfosUser }) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    favorites: [{ comics: [] }, { characters: [] }],
  });
  const [error, setError] = useState({
    username: false,
    email: false,
    password: false,
    conflit: false,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const userClone = { ...user };
    const errorClone = { ...error };
    userClone[event.target.name] = event.target.value;
    errorClone[event.target.name] = false;
    errorClone.conflit = false;
    setError(errorClone);
    setUser(userClone);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errorClone = { ...error };
    // Parcourir les clés de l'objet utilisateur
    Object.keys(user).forEach((key) => {
      if (!user[key]) {
        errorClone[key] = true;
      }
    });
    setError(errorClone);

    // Vérifier s'il existe une erreur
    const hasError = Object.values(errorClone).some((value) => value === true);
    if (hasError) {
      return;
    }

    try {
      const response = await axios.post(
        "https://site--marvel--m4zrv4ywn86q.code.run/signup",
        // "http://localhost:3000/signup",
        user
      );
      const infosUserClone = { ...infosUser };
      infosUserClone.token = response.data.token;
      infosUserClone.id = response.data._id;
      infosUserClone.username = response.data.account.username;

      const cookie = Cookies.get("Marvel");
      if (cookie) {
        Cookies.remove("Marvel");
      }

      setInfosUser(infosUserClone);
      Cookies.set("Marvel", response.data.token, { expires: 14 });
      navigate("/");
    } catch (error) {
      console.log(error.message);
      if (error.response.status === 409) {
        const errorClone = { ...error };
        errorClone.conflit = true;
        setError(errorClone);
      }
    }
  };

  // console.log(infosUser);

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <label id="username">
          <p>Username</p>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="ex.Captain America"
            className={error.username ? "red-input" : undefined}
            value={user.username}
          />
        </label>
        {error.username && <span className="red">Remplir votre Username</span>}
        <label id="email">
          <p>Email</p>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="ex. captain.america@.avenger.us"
            value={user.email}
            className={error.email || error.conflit ? "red-input" : undefined}
          />
        </label>
        {error.email && <span className="red">Remplir votre Email</span>}
        <label id="password">
          <p>Password</p>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="ex. jarvis"
            value={user.password}
            className={error.password ? "red-input" : undefined}
          />
        </label>
        {error.password && <span className="red">Remplir votre Password</span>}
        {error.conflit && (
          <p className="red">Cette adresse mail a déjà été utilisé</p>
        )}
        <button type="submit" className="submit">
          Soumettre
        </button>
      </form>
    </div>
  );
}
