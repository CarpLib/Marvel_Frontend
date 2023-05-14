import "./card_comics.scss";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Index({ comics, infosUser, setInfosUser }) {
  const navigate = useNavigate();

  const handleClickFavorite = () => {
    // console.log("click");
    // Vérification si l'utilisateur est connecté
    const token = Cookies.get("Marvel");
    if (!token) {
      navigate("/login");
      return;
    } else {
      const infosUserClone = { ...infosUser };
      const index = infosUserClone.favorites[0].comics.indexOf(comics._id);

      // si l'ID existe déjà dans le tableau
      if (index !== -1) {
        // enlever l'ID du tableau
        infosUserClone.favorites[0].comics.splice(index, 1);
      } else {
        // ajouter l'ID à la fin du tableau
        infosUserClone.favorites[0].comics.push(comics._id);
      }

      setInfosUser(infosUserClone);
      // envoi des données au back
      const fetchData = async () => {
        const response = await axios.put(
          // "https://site--marvel--m4zrv4ywn86q.code.run/favorites",
          "http://localhost:3000/favorites",
          infosUserClone,
          {
            headers: {
              Authorization: `Bearer ${infosUser.token}`,
            },
          }
        );
        // console.log(response.data);
      };
      fetchData();
    }
  };

  return (
    <div
      className="card_comics"
      style={{
        backgroundImage: `url(${comics.thumbnail.path}/standard_fantastic.${comics.thumbnail.extension})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="favorite">
        <FontAwesomeIcon
          icon="fa-solid fa-bookmark"
          onClick={handleClickFavorite}
          style={{
            color: infosUser.favorites[0].comics.includes(comics._id)
              ? "#ff0000"
              : "green",
          }}
        />
      </div>
      <div className="block-description">
        <h2>{comics.title}</h2>
        {comics.description && (
          <p className="description">{comics.description}</p>
        )}
      </div>
    </div>
  );
}
