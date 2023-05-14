import { useEffect, useState } from "react";
import "./characters.scss";
import axios from "axios";
import FadeLoader from "react-spinners/FadeLoader";
import Card from "../../components/Card";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css"; // Importer le CSS pour la pagination
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Index({ infosUser, setInfosUser }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCharacters, setTotalCharacters] = useState(0);

  const handleChange = (event) => {
    try {
      const value = event.target.value;
      // console.log(value);
      const fetchData = async () => {
        const response = await axios.get(
          // `http://localhost:3000/characters?name=${value}`
          `https://site--marvel--m4zrv4ywn86q.code.run/characters?name=${value}`
        );
        // console.log(response.data);
        setData(response.data.results);
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  };

  const onPageChange = (page) => {
    // console.log(page);
    const fetchData = async () => {
      const response = await axios.get(
        // `https://site--marvel--m4zrv4ywn86q.code.run/characters?skip=${
        //   page * 100 - 100
        // }`
        `http://localhost:3000/characters?skip=${page * 100 - 100}`
      );
      // console.log(response.data.results);
      setData(response.data.results);
    };
    fetchData();
    setCurrentPage(page);
  };

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          "http://localhost:3000/characters"
          // "https://site--marvel--m4zrv4ywn86q.code.run/characters"
        );
        // console.log(response.data.count);
        setData(response.data.results);
        setTotalCharacters(response.data.count);
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
        name="search"
        className="search"
        placeholder="Recherche votre personnage"
        onChange={handleChange}
      />
      <Pagination
        current={currentPage}
        total={totalCharacters}
        pageSize={100}
        onChange={onPageChange}
        className="pagination"
        showTitle={false}
      />
      <div className="characters-list">
        {data.map((character) => {
          return (
            <Card
              key={character._id}
              character={character}
              setInfosUser={setInfosUser}
              infosUser={infosUser}
            />
          );
        })}
      </div>
    </div>
  );
}
