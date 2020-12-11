import React from 'react';

import {movies} from './movies';

import MoviePreview from "./movie-preview";
import MovieDetails from "./movie-details";
import './App.css';

function App() {
	
	const [currentMovie, setCurrentMovie] = React.useState(null);
	
    return (
		
        <div>
		
			<h1>Movie Information</h1>
		<div id="movieButtons">
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
		</div>
			
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
