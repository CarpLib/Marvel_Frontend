import { useEffect, useState } from "react";
import "./favorites.scss";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Index({ infosUser, setInfosUser }) {
  // console.log(infosUser);
  const [data, setData] = useState([{ comics: [] }, { characters: [] }]); // État pour les données du personnage
  const [isLoadingCharacter, setIsLoadingCharacter] = useState(true); // État pour le chargement des données du personnage
  const [isLoadingComics, setIsLoadingComics] = useState(true); // État pour le chargement des données des comics

  const fetchDataCharacter = async (id) => {
    // Récupération des données du personnage
    const response = await axios.get(`http://localhost:3000/character/${id}`);
    // console.log(response.data);
    const dataClone = [...data];
    dataClone[1].characters.push(response.data);
    setData(dataClone);
    setIsLoadingCharacter(false);
  };

  const fetchDataComics = async (id) => {
    // Récupération des données du personnage
    const response = await axios.get(`http://localhost:3000/comic/${id}`);
    // console.log(response.data);
    const dataClone = [...data];
    dataClone[0].comics.push(response.data);
    setData(dataClone);
    setIsLoadingComics(false);
  };
  const characters = infosUser.favorites[1].characters;
  const comics = infosUser.favorites[0].comics;

  // Récupération des données à partir de l'API lors du chargement du composant
  useEffect(() => {
    characters.map((character) => {
      fetchDataCharacter(character);
    });
    comics.map((comic) => {
      fetchDataComics(comic);
    });
  }, [characters, comics]);

  // Configuration du carrousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return isLoadingCharacter && isLoadingComics ? (
    <div className="favorites">
      <h1>Vos Favoris</h1>
      {/* Loader  */}
    </div>
  ) : (
    <div className="favorites">
      <h1>Vos Favoris</h1>

      <h2>Les Personnages</h2>
      <Carousel
        responsive={responsive}
        className="carousel"
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {data[1].characters.map((elem, index) => {
          // console.log(elem.thumbnail.path);
          return (
            elem.thumbnail.path !==
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && (
              <div key={index} className="character">
                <img
                  src={`${elem.thumbnail.path}/portrait_incredible.${elem.thumbnail.extension}`}
                  alt={elem.title}
                />
              </div>
            )
          );
        })}
      </Carousel>
      <h2>Les Comics</h2>
      <Carousel
        responsive={responsive}
        className="carousel"
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {data[0].comics.map((elem, index) => {
          // console.log(elem.thumbnail.path);
          return (
            elem.thumbnail.path !==
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && (
              <div key={index} className="character">
                <img
                  src={`${elem.thumbnail.path}/portrait_incredible.${elem.thumbnail.extension}`}
                  alt={elem.title}
                />
              </div>
            )
          );
        })}
      </Carousel>
    </div>
  );
}
