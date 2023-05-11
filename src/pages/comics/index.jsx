import { useEffect, useState } from "react";
import "./comics.scss";
import axios from "axios";
import Card from "../../components/Card_Comics";

export default function Index({ dataCommics }) {
  // console.log(dataCommics);
  return (
    <div className="comics">
      <h1>Les Comics de l'univers Marvel</h1>
      <input
        type="text"
        className="search"
        placeholder="Recherche votre comics"
      />
      <div className="comics-list">
        {dataCommics.map((comics) => {
          console.log(comics.thumbnail.path);
          return comics.thumbnail.path !==
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? (
            <Card key={comics._id} comics={comics} />
          ) : null;
        })}
      </div>
    </div>
  );
}
