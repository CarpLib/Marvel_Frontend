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

export default function Column({ isExpanded, title, content, onClick }) {
  const style = useSpring({
    width: isExpanded ? "70%" : "5%",
    from: { width: "5%", height: "100%" },
    backgroundColor: isExpanded ? "red" : "blue",
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
        <h1>{title}</h1>
      </animated.div>
      {isExpanded && (
        <div className="content">
          <div className="pictures">
            {title === "Univers" ? (
              <img src={StanLee} alt="" />
            ) : title === "Personnages" ? (
              <>
                <img src={SpiderMan} alt="" />
                <img src={IronMan} alt="" />
                <img src={CaptainAmerica} alt="" />
                <img src={Thor} alt="" />
                <img src={Hulk} alt="" />
                <img src={BlackWidow} alt="" />
                <img src={Wolverine} alt="" />
              </>
            ) : null}
          </div>
          <p>{content} </p>
        </div>
      )}
    </animated.div>
  );
}
