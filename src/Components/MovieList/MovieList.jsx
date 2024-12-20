import React from "react";
import "./MovieList.css";
import { useHistory } from "react-router-dom";

export default function MovieList({ Poster, Title, Type, Year, id }) {
  const history = useHistory();

  return (
    <div className="movieList">
      <div onClick={() => history.push(`/${id}`)} className="movieList__data">
        <img src={Poster} alt={Title} width="150px" height="150px" />
        <p className="movieList__title">{Title}</p>
        <p className="movieList__year">{Year}</p>
      </div>
    </div>
  );
}
