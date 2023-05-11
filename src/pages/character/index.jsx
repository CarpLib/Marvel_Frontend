import { useEffect, useState } from "react";
import "./character.scss";
import FadeLoader from "react-spinners/FadeLoader";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Index({ dataCommics }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const id = useParams();

  console.log("List Comics", dataCommics);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          `https://site--marvel--m4zrv4ywn86q.code.run/character/${id.id}`
        );
        // console.log(response.data);
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
    <div className="character">
      <h1>{data.name}</h1>
      <div className="character-img">
        {data.thumbnail.path !==
          "https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && (
          <img
            src={`${data.thumbnail.path}/standard_fantastic.${data.thumbnail.extension}`}
            alt={data.name}
            className="character-img"
          />
        )}
      </div>

      {/* <img
        src={`${data.thumbnail.path}/standard_fantastic.${data.thumbnail.extension}`}
        alt={data.name}
        className="character-img"
      /> */}
      <p className="character-description">{data.description}</p>
    </div>
  );
}
