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
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const userClone = { ...user };
    userClone[event.target.name] = event.target.value;
    setUser(userClone);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        // "https://marvel-backend-jm.herokuapp.com/signup",
        "http://localhost:3000/signup",
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
    }
  };

  console.log(infosUser);

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" name="username" onChange={handleChange} />
        </label>
        <label>
          <p>email</p>
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <label>
          <p>password</p>
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <button type="submit" className="submit">
          Soumettre
        </button>
      </form>
    </div>
  );
}
