import { useEffect, useState } from "react";
import "./characters.scss";
import axios from "axios";
import FadeLoader from "react-spinners/FadeLoader";
import Card from "../../components/Card";

export default function Index({ dataCommics }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          "http://site--marvel--m4zrv4ywn86q.code.run/characters"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return isLoading ? (
    <div className="loader">
      <FadeLoader color="#36d7b7" />
    </div>
  ) : (
    <div className="characters">
      <h1>Les Personnages de l'univers Marvel</h1>
      <input
        type="text"
        className="search"
        placeholder="Recherche votre personnage"
      />
      <div className="characters-list">
        {data.map((character) => {
          return <Card key={character._id} character={character} />;
        })}
      </div>
    </div>
  );
}
