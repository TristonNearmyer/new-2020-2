import React from 'react';

import {movies} from './movies';

const movieContainerStyles = {
	backgroundColor: '#F2EDEB',
    height: '250px',
    width: '250px',
    margin: '25px',
    padding: '5px',
    boxShadow: '4px 4px 12px #9A8B84',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

function App() {
	
	const [currentMovie, setCurrentMovie] = React.useState(null);
	
	console.log(currentMovie);
	
    return (
        <div>
		
			<h1>Movie Information</h1>
			{
				movies.map((movie) => {
				return (
					<button key={movie.title}  onClick={() => {setCurrentMovie(movie)}}>
						<p>{movie.title}</p>
						<p>{movie.rating}</p>
						<p>{movie.director}</p>
						<p>{movie.releaseYear}</p>
						<img src = {movie.posterUrl}/>
					</button>
					)
				})
			}
			
			{
				currentMovie ?
					<div>
						<p>{currentMovie.title}</p>
						<p>{currentMovie.title}</p>
						<p>{currentMovie.rating}</p>
						<p>{currentMovie.director}</p>
						<p>{currentMovie.releaseYear}</p>
						<p>{currentMovie.description}</p>
						<p>{currentMovie.categories.join(', ')}</p>
						<img src = {currentMovie.posterUrl}/>
					</div>
					:
					<p>No Movie Selected</p>
			
			}

			

        </div>
    );
}

export default App;
