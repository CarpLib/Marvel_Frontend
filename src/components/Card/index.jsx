import { useNavigate } from "react-router-dom";
import "./card.scss";

export default function Index({ character }) {
  const navigate = useNavigate();
  if (character.thumbnail.extension === "gif") {
    console.log(character);
  }
  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/character/${character._id}`);
      }}
    >
      <h2>{character.name}</h2>
      {character.thumbnail.path !==
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && (
        <img
          src={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`}
          alt={character.name}
        />
      )}

      {character.description && (
        <p className="description">{character.description}</p>
      )}
    </div>
  );
}
