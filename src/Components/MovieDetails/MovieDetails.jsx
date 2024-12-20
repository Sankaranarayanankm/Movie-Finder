import React, { useEffect, useState } from "react";
import "./MovieDetails.css";
import { useParams } from "react-router-dom";
import { apikey } from "../Search/Search";
import { useHistory } from "react-router-dom";

const MovieDetails = () => {
  const [data, setData] = useState({});
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = useParams();
  const { detailId } = params;

  if (error) {
    return <p className="error">{error.message}</p>;
  }

  useEffect(() => {
    async function send() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.omdbapi.com/?i=${detailId}&apikey=${apikey}`
        );
        if (!response.ok) {
          throw new Error("Failed to get data");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    send();
  }, [detailId]);
  console.log(data);
  // console.log(detailId);

  return (
    <div className="movieDetails">
      {loading && <p>Loading...</p>}

      <img
        className="movieDetails__image"
        src={data.Poster}
        alt={data.Title}
        width={200}
        height={300}
      />

      <h4>Title: {data.Title}</h4>
      <h4>Genere: {data.Genre}</h4>
      <h4>Plot: {data.Plot}</h4>
      <h4>Year : {data.Year}</h4>
      <div className="button">
        <button onClick={() => history.push("/")}>Back</button>
      </div>
    </div>
  );
};

export default MovieDetails;
