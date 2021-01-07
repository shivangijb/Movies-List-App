import React from "react";
import './App.css';
import data from "./data";
import Movie from "./components/Movie";

function App() {

   const [movies, setMovies] = React.useState("");
   //const [sorting, setSorting] = React.useState("");
   let moviesList = [];

  function handleChange(event){
    setMovies(event.target.value);
  }

  moviesList = data.filter((movie) => {
    return movie.Title.toLowerCase().indexOf(movies.toLowerCase()) !== -1
  })
  
  return (
    <>
    
      <header>
      <label>Sort By:</label>
      <select className="sort" >
      <option className="sortOption" value="movieTitle"></option>
        <option className="sortOption" value="movieTitle">Title</option>
        <option className="sortOption" value="movieRating">IMDB Rating</option>
        <option  className="sortOption" value="movieYear">Release Year</option>
        <option  className="sortOption" value="movieCollection">Box Office Collection</option>
      </select>
      
        <input className="search" type="search" placeholder="Search Movie by Name" onChange={handleChange}></input>
      </header>
        <div className="movie-container">
          
          {moviesList.map((movie) => (
            <Movie
            title={movie.Title}
            poster={movie.Poster}
            plot={movie.Plot}
            imdbRating={movie.imdbRating}/>
          ))}
        
      </div>
    </>
  
  );
}

export default App;
