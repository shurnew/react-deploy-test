import React, { Component } from "react";
import "./movie.css";
import PropTypes from "prop-types";

function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster poster={poster} alt={title}>            
        </MoviePoster>
      </div>
      <div className="Movie__Column">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, index) => (
            <MovieGenre genre={genre} key={index} />
          ))}
        </div>
        <div className="Movie__Synopsis">
          <p>{synopsis}</p>
        </div>
      </div>
    </div>
  );
}

function MoviePoster({ poster, alt }) {
  return (
    <div className="Movie__Poster">
        <img src={poster} alt={alt} title={alt} className="Movie__Img"/>
        <h1 className = "Movie__InnerTitle" >{alt}</h1>
    </div>        
  );
}

function MovieGenre({ genre }) {
  return <span className="Movie__Genre">{genre}</span>;
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired,
};

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired,
};

export default Movie;
