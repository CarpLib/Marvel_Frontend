import { useSpring, animated, config } from "react-spring";
import "./column.scss";
import StanLee from "../../assets/img/StanLee.jpg";
import SpiderMan from "../../assets/img/SpiderMan.jpg";
import IronMan from "../../assets/img/IronMan.jpg";
import CaptainAmerica from "../../assets/img/CaptainAmerica.jpg";
import Thor from "../../assets/img/Thor.webp";
import Hulk from "../../assets/img/Hulk.jpg";
import BlackWidow from "../../assets/img/BlackWidow.jpg";
import Wolverine from "../../assets/img/Wolverine.jpg";

export default function Column({
  isExpanded,
  title,
  content,
  onClick,
  backgroundImage,
}) {
  const style = useSpring({
    width: isExpanded ? "71%" : "7%",
    from: { width: "5%", height: "100%" },
    backgroundColor: isExpanded ? "blue" : "red",
    borderColor: "white",
    backgroundImage: isExpanded ? "" : `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    config: config.wobbly,
  });

  const titleStyle = useSpring({
    opacity: isExpanded ? 0 : 1,
    from: { opacity: 1 },
  });

  return (
    <animated.div style={style} onClick={onClick} className="column">
      <animated.div
        style={{
          ...titleStyle,

          //   whiteSpace: "nowrap",
        }}
        className="title"
      >
        {isExpanded ? "" : <h1>{title}</h1>}
      </animated.div>
      {isExpanded && (
        <div className="content">
          {title === "Univers" ? (
            <img src={StanLee} alt="" className="picture" />
          ) : title === "Personnages" ? (
            <div className="picture-line">
              <img
                src={SpiderMan}
                alt="Représentation de profil de Spiderman"
                className="pictures"
              />
              <img
                src={IronMan}
                alt="Représentation de profil d'IronMan"
                className="pictures"
              />
              <img
                src={CaptainAmerica}
                alt="Représentation de profil de Captain America"
                className="pictures"
              />
              <img
                src={Thor}
                alt="Représentation de profil de Thor"
                className="pictures"
              />
              <img
                src={Hulk}
                alt="Représentation de profil d' Hulk"
                className="pictures"
              />
              <img
                src={BlackWidow}
                alt="Représentation de profil de BlackWidow "
                className="pictures"
              />
              <img
                src={Wolverine}
                alt="Représentation de profil de Wolverine"
                className="pictures"
              />
            </div>
          ) : null}

          {content}
        </div>
      )}
    </animated.div>
  );
}
