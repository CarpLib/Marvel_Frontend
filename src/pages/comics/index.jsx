import { useState } from "react";
import "./comics.scss";
import axios from "axios";
import Card from "../../components/Card_Comics";

export default function Index({ dataCommics, setDataCommics }) {
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    // console.log(value);
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/comics?title=${value}`
        // `https://site--marvel--m4zrv4ywn86q.code.run/characters?name=${value}`
      );
      setData(response.data);
      setDataCommics(data);
    };
    fetchData();
  };
  // console.log(dataCommics);
  return (
    <div className="comics">
      <h1>Les Comics de l'univers Marvel</h1>
      <input
        type="text"
        name="search"
        className="search"
        placeholder="Recherche votre comics"
        onChange={handleChange}
      />
      <div className="comics-list">
        {dataCommics.map((comics) => {
          // console.log(comics.thumbnail.path);
          return comics.thumbnail.path !==
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? (
            <Card key={comics._id} comics={comics} />
          ) : null;
        })}
      </div>
    </div>
  );
}
