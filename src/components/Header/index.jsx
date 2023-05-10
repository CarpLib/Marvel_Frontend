import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.scss";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
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
      </div>
    </header>
  );
}
