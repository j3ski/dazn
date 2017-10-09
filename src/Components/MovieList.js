import React from 'react';
import './MovieList.css';

import Intersection from './Intersection'

const renderMovie = movie => (<li key={movie.id}>
    <div className="Movie">
        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title}/>
        <h3>{movie.original_title}</h3>
    </div>
</li>);

export default ({movies, loading, fetchMore}) => (<ul className="MovieList">
    {movies.map(renderMovie)}
     <Intersection handler={fetchMore}/>
</ul>);