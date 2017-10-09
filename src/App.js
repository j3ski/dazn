import React from 'react';
import './App.css';

import SearchForm from './Components/SearchForm';
import MovieList from './Components/MovieList';
import fetchMovies from './utils/fetchMovies';
import debounce from './utils/debounce';
import uniq from './utils/uniq';


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            query: ''
        };
        this.onSearchChange = debounce(value => this.searchChange(value), 300);
    }
    searchChange(value) {
        this.setState({loading: true});
        value && fetchMovies(value)
            .then(({total_pages, results}) => this.setState({
                movies: results,
                totalPages: total_pages,
                query: value,
                page: 1,
                loading: false
            }));
    }
    fetchMore() {
        this.setState({loading: true});
        fetchMovies(this.state.query, this.state.page + 1)
            .then(({results}) => this.setState(({movies, page}) => ({
                movies: uniq([...movies, ...results], 'id'),
                page: page + 1,
                loading: false
            })));
    }
    render() {
        return (
            <div className="App">
                <SearchForm onChange={(value) => this.onSearchChange(value)}/>
                <MovieList movies={this.state.movies} loading={this.state.loading} hasMore={this.state.page < this.state.totalPages} fetchMore={() => this.fetchMore()}/>
            </div>
        )
    }
}