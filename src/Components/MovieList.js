import React from 'react';

const renderMovie = movie => (<li key={movie.id}>
    <div>
        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title}/>
    </div>
</li>);

export default ({movies}) => (<ul>
    {movies.map(renderMovie)}
</ul>);