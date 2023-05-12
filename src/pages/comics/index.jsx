import { useEffect, useState } from "react";
import "./comics.scss";
import axios from "axios";
import Card from "../../components/Card_Comics";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css"; // Importer le CSS pour la pagination

export default function Index() {
  const [data, setData] = useState([]);
  const [dataComics, setDataComics] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        // "https://site--marvel--m4zrv4ywn86q.code.run/comics"
        "http://localhost:3000/comics"
      );
      // console.log(response.data.count);
      setCount(response.data.count);
      setDataComics(response.data.results);
    };
    fetchData();
  }, []);

  const handlePageChange = (page) => {
    // console.log(page);
    const fetchData = async () => {
      const response = await axios(
        // `https://site--marvel--m4zrv4ywn86q.code.run/comics?skip=${
        //   page * 100 - 100
        // }`
        `http://localhost:3000/comics?skip=${page * 100 - 100}`
      );
      // console.log(response.data.results);
      setDataComics(response.data.results);
    };
    fetchData();
    setCurrentPage(page);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    // console.log(value);
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/comics?title=${value}`
        // `https://site--marvel--m4zrv4ywn86q.code.run/characters?name=${value}`
      );
      // console.log(response.data);
      setData(response.data);
      setDataComics(data);
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
      <div>
        <Pagination
          current={currentPage}
          total={count} // Remplacez 500 par le nombre total d'éléments à paginer
          pageSize={100} // Remplacez 10 par le nombre d'éléments par page
          onChange={handlePageChange}
          className="pagination"
          showTitle={false}
        />
      </div>
      <div className="comics-list">
        {dataComics.map((comics) => {
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
