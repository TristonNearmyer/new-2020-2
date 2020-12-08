import React from 'react';

import {movies} from './movies';

import MoviePreview from "./movie-preview";
import MovieDetails from "./movie-details";

function App() {
	
	const [currentMovie, setCurrentMovie] = React.useState(null);
	
    return (
        <div>
		
			<h1>Movie Information</h1>
			{
				movies.map((movie) => {
				return (
					<MoviePreview
					key = {movie.title}
					movie={movie}
					onClickFunction = {setCurrentMovie}
					/>
					)
				})
			}
			
			{
				currentMovie ?
					<MovieDetails currentMovie={currentMovie}/>
					:
					<p>No Movie Selected</p>
			
			}

			

        </div>
    );
}

export default App;
