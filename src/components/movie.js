import React from "react";
import "./movie.css";
import PropTypes from "prop-types";

function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie__Colums">
        <MoviePoster poster={poster} alt ={title} />
      </div>
      <div className="Movie__Colums">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genres, index) => (
            <MovieGenres genres={genres} key={index}></MovieGenres>
          ))}
        </div>
        <p className="Movie__Synopsis">{synopsis}</p>
      </div>
    </div>
  );
}

function MoviePoster({ poster,alt }) {
  return <img alt={alt} title={alt} src={poster} className="Movie__Poster" />;
}
function MovieGenres({ genres }) {
  return <span className="Movie__Genres">{genres}</span>;
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired,
};

Movie.defaultProps = {
  title: "영화이름",
  poster: "https://www.flaticon.com/svg/static/icons/svg/1596/1596476.svg",
};

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

MovieGenres.propTypes = {
  genres: PropTypes.string.isRequired,
};

export default Movie;
