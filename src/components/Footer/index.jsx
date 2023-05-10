import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <p>
        Made <span className="white">with</span>{" "}
        <span className="red">React</span> at <span className="white">Le </span>
        <span className="red">Reacteur</span> by{" "}
        <span className="red">Laurent</span>
      </p>
    </footer>
  );
}
