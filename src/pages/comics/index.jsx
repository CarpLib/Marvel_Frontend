import { useEffect, useState } from "react";
import "./comics.scss";
import FadeLoader from "react-spinners/FadeLoader";
import axios from "axios";

export default function Index({ dataCommics }) {
  console.log(dataCommics);
  return <div className="comics">Comics</div>;
}
