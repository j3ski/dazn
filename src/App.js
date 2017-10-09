import React from 'react';
import './App.css';

import SearchForm from './Components/SearchForm';
import MovieList from './Components/MovieList';
import fetchMovies from './utils/fetchMovies';
import debounce from './utils/debounce';


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
        this.onSearchChange = debounce(value => {
            value && fetchMovies(value)
                .then(({total_pages, results}) => this.setState({
                    movies: results,
                    totalPages: total_pages
                }));
        }, 300);
    }
    render() {
        return (
            <div className="App">
                <SearchForm onChange={(value) => this.onSearchChange(value)} />
                <MovieList movies={this.state.movies} />
            </div>
        )
    }
}