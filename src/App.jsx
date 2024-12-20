import Search from "./Components/Search/Search";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
// const URL="https://www.omdbapi.com/?i=tt3896198&apikey=160e8796";
// const URL = `http://www.omdbapi.com/?apikey=160e8796&`;

/**
 Build a Movie Search App where users can search for movies by title and view details about selected movies.

### **Requirements:**

1. **Search Functionality:**
    - A search bar where users can type a movie title.
    - Fetch movie data from the [OMDb API](https://www.omdbapi.com/).
2. **Display Results:**
    - Show a list of movies matching the search query.
    - Each result should display:
        - Movie title
        - Release year
        - Poster image
3. **Movie Details Page:**
    - When a movie is clicked, navigate to a details page showing:
        - Title, year, genre, plot, and poster.
    - Use React Router for navigation.
4. **Error Handling:**
    - Handle cases where no movies are found.
    - Show loading indicators while fetching data.
 */

export default function App() {
  return (
    <div className="movie">
      <div className="movie__heading">
        <h1>Movie Finder.</h1>
      </div>
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>
        <Route path="/:detailId">
          <MovieDetails />
        </Route>
      </Switch>
    </div>
  );
}
