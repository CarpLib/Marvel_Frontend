import "./header.scss";
import logo from "../../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Header({ infosUser, setInfosUser }) {
  const navigate = useNavigate();
  const token = Cookies.get("Marvel");

  const handleClick = (event) => {
    event.preventDefault();
    const infosUserClone = { ...infosUser };
    infosUserClone.token = "";
    infosUserClone.id = "";
    infosUserClone.username = "";
    infosUserClone.favorites = [{ comics: [] }, { characters: [] }];
    setInfosUser(infosUserClone);
    Cookies.remove("Marvel");
    navigate("/");
  };
  return (
    <header>
      <div className="container">
        <Link to="/" className="link">
          <img src={logo} alt="Logo Marvel" />
        </Link>

        <nav>
          <Link to="/characters" className="link">
            <p>Personnages</p>
          </Link>
          <Link to="/comics" className="link">
            <p>Comics</p>
          </Link>
          <Link to="/favorites" className="link">
            <p>Favoris</p>
          </Link>
        </nav>
        {token ? (
          <div className="disconnected">
            <button className="btn-2" onClick={handleClick}>
              Se Déconnecter
            </button>
          </div>
        ) : (
          <div className="signUp-login">
            <Link to="/signup" className="link">
              <button className="btn-1">S'inscrire</button>
            </Link>
            <Link to="/login" className="link">
              <button className="btn-1">Se Connecter</button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
