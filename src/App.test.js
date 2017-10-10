import React from 'react';
import {shallow} from 'enzyme'
import App from './App';
import SearchForm from './Components/SearchForm';
import MovieList from './Components/MovieList';

describe('<App />', function () {
    let app;

    beforeEach(function() {
        app = shallow(<App />);
    });
    it('should have SearchForm', function () {
        const searchForm = app.find(SearchForm);

        expect(searchForm.length).toBe(1);
    });
    it('should have MovieList', function () {
        const movieList = app.find(MovieList);

        expect(movieList.length).toBe(1);
    });

    it('should pass proper args to SearchForm', function () {
        const onSearchChange = jest.fn();
        app.instance().onSearchChange = onSearchChange;
        app.update();

        const searchForm = app.find(SearchForm);

        searchForm.props().onChange('val');
        expect(onSearchChange).toBeCalledWith('val');
    });

    it('should pass proper args to MovieList', function () {
       const fetchMore = jest.fn();
       app.instance().fetchMore = fetchMore;
       app.instance().setState({
           movies: [1,2,3]
       });
       app.update();

       const props = app.find(MovieList).props();

       expect(props.movies).toEqual([1,2,3]);
       props.fetchMore();
       expect(fetchMore).toBeCalled();
    });
});
