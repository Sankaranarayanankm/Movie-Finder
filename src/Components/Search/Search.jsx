import React, { useEffect, useState } from "react";
import "./Search.css";
import MovieList from "../MovieList/MovieList";
export const apikey = "160e8796";

export default function Search(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (!input) return;
    async function send() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://www.omdbapi.com/?s=${searchInput}&apikey=${apikey}`
        );
        if (!response.ok) {
          const error = await response.json();
          console.log(error);
          throw new Error("failed to get data");
        }

        const result = await response.json();
        setData(result.Search);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    send();
  }, [searchInput]);
  const submitHandler = (e) => {
    e.preventDefault();
    setSearchInput(input);
  };

  console.log(data);
  if (error) {
    return <p className="error">{error.message}</p>;
  }
  return (
    <div className="body">
      <form onSubmit={submitHandler} className="search">
        <div className="search__input">
          <input
            type="text"
            value={input}
            placeholder="search movies here"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="search__button">
          <button type="button" className="btn">
            Search
          </button>
        </div>
      </form>
      {loading && <h4>Loading...please wait </h4>}
      <div className="renderMovies">
        {data.length !== 0 &&
          data.map((item) => (
            <MovieList id={item.imdbID} key={item.imdbID} {...item} />
          ))}
        {!loading && data.length == 0 && <p>no movies found </p>}
      </div>
    </div>
  );
}
