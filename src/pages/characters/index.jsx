import { useEffect, useState } from "react";
import "./characters.scss";
import axios from "axios";

export default function Index() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          "http://site--marvel--m4zrv4ywn86q.code.run/characters"
        );
        console.log(response);
        setData(response.data);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return <div className="characters">Characters</div>;
}
