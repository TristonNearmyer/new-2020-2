import React from 'react';


const MoviePreview = (props) => {
	const {movie, onClickFunction} = props;
		return (
					<button key={movie.title}  onClick={() => {onClickFunction(movie)}}>
						<p>{movie.title}</p>
						<p>{movie.rating}</p>
						<p>{movie.director}</p>
						<p>{movie.releaseYear}</p>
					</button>
					)
};

export default MoviePreview;