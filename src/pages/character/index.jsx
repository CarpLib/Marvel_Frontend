import { useEffect, useState } from "react";
import "./character.scss";
import FadeLoader from "react-spinners/FadeLoader";
import axios from "axios";
import { useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Index() {
  const [data, setData] = useState([]);
  const [dataComics, setDataComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingComics, setIsLoadingComics] = useState(true);
  const id = useParams();

  // Carrousel
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

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          `http://localhost:3000/character/${id.id}`
          // `https://site--marvel--m4zrv4ywn86q.code.run/character/${id.id}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
        const responseComics = await axios.get(
          `http://localhost:3000/comics/${response.data._id}`
          // `https://site--marvel--m4zrv4ywn86q.code.run/comics/${response.data._id}`
        );
        // console.log(responseComics.data);
        setDataComics(responseComics.data);
        setIsLoadingComics(false);
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [id.id]);

  // console.log(dataComics.comics);

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
      <p className="character-description">{data.description}</p>

      {isLoadingComics ? (
        <div className="loader">
          <FadeLoader color="#36d7b7" />
        </div>
      ) : (
        <Carousel
          responsive={responsive}
          className="carousel"
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {dataComics.comics.map((elem, index) => {
            // console.log(elem);
            return (
              <div key={index} className="character-comics">
                <img
                  src={`${elem.thumbnail.path}/portrait_incredible.${elem.thumbnail.extension}`}
                  alt={elem.title}
                />
              </div>
            );
          })}
        </Carousel>
      )}
    </div>
  );
}
