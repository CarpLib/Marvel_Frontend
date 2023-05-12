// Dépendances
import { useEffect, useState } from "react";
import "./character.scss";
import FadeLoader from "react-spinners/FadeLoader";
import axios from "axios";
import { useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Index() {
  // State
  const [data, setData] = useState([]); // État pour les données du personnage
  const [dataComics, setDataComics] = useState([]); // État pour les données des comics
  const [isLoading, setIsLoading] = useState(true); // État pour le chargement des données du personnage
  const [isLoadingComics, setIsLoadingComics] = useState(true); // État pour le chargement des données des comics
  const id = useParams(); // Extraction de l'ID à partir des paramètres de l'URL

  // Configuration du carrousel
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 6,
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

  // console.log("List Comics", dataCommics);

  // Récupération des données à partir de l'API lors du chargement du composant
  useEffect(() => {
    try {
      const fetchData = async () => {
        // Récupération des données du personnage
        const response = await axios.get(
          `http://localhost:3000/character/${id.id}`
        );
        setData(response.data);
        setIsLoading(false);

        // Récupération des données des comics liés au personnage
        const responseComics = await axios.get(
          `http://localhost:3000/comics/${response.data._id}`
        );
        setDataComics(responseComics.data);
        setIsLoadingComics(false);
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [id.id]); // Dépendance à l'ID pour relancer la récupération de données si l'ID change;

  // console.log(dataComics.comics);

  // Affichage du composant
  return isLoading ? (
    // Affichage du loader si les données du personnage sont en cours de chargement
    <div className="loader">
      <FadeLoader color="#36d7b7" />
    </div>
  ) : (
    // Affichage des données du personnage si elles sont chargées
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
      <p className="character-description">{data.description}</p>

      {/* Affichage du loader si les données des comics sont en cours de chargement */}
      {isLoadingComics ? (
        <div className="loader">
          <FadeLoader color="#36d7b7" />
        </div>
      ) : (
        // Affichage des comics si les données sont chargées

        <Carousel
          responsive={responsive}
          className="carousel"
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {dataComics.comics.map((elem, index) => {
            console.log(elem.thumbnail.path);
            return (
              elem.thumbnail.path !==
                "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && (
                <div key={index} className="character-comics">
                  <img
                    src={`${elem.thumbnail.path}/portrait_incredible.${elem.thumbnail.extension}`}
                    alt={elem.title}
                  />
                </div>
              )
            );
          })}
        </Carousel>
      )}
    </div>
  );
}
