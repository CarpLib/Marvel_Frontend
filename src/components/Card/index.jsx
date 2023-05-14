import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./card.scss";
import axios from "axios";

export default function Index({ character, infosUser, setInfosUser }) {
  const navigate = useNavigate();

  // console.log(character._id);

  const handleClickFavorite = () => {
    // console.log("click");
    // Vérification si l'utilisateur est connecté
    const token = Cookies.get("Marvel");
    if (!token) {
      navigate("/login");
      return;
    } else {
      const infosUserClone = { ...infosUser };
      const index = infosUserClone.favorites[1].characters.indexOf(
        character._id
      );

      // si l'ID existe déjà dans le tableau
      if (index !== -1) {
        // enlever l'ID du tableau
        infosUserClone.favorites[1].characters.splice(index, 1);
      } else {
        // ajouter l'ID à la fin du tableau
        infosUserClone.favorites[1].characters.push(character._id);
      }

      setInfosUser(infosUserClone);
      // envoi des données au back
      const fetchData = async () => {
        const response = await axios.put(
          // "https://site--marvel--m4zrv4ywn86q.code.run/user",
          "http://localhost:3000/favorites",
          infosUserClone,
          {
            headers: {
              Authorization: `Bearer ${infosUser.token}`,
            },
          }
        );
        console.log(response.data);
      };
      fetchData();
    }
  };

  // console.log(infosUser);
  return (
    <div className="card">
      <div className="favorite">
        <FontAwesomeIcon
          icon="fa-solid fa-bookmark"
          onClick={handleClickFavorite}
          style={{
            color: infosUser.favorites[1].characters.includes(character._id)
              ? "#ff0000"
              : "#000000",
          }}
        />
      </div>
      <div
        className="description_blok"
        onClick={() => {
          navigate(`/character/${character._id}`);
        }}
      >
        {character.thumbnail.path !==
          "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && (
          <img
            src={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`}
            alt={character.name}
          />
        )}
        <h2>{character.name}</h2>

        {character.description && (
          <p className="description">{character.description}</p>
        )}
      </div>
    </div>
  );
}
