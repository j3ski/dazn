import React from 'react';
import {shallow} from 'enzyme';
import MovieList from './MovieList';
import Intersection from './Intersection';

describe('<MovieList />', function () {
    let movieList, fetchMore, movies;
    beforeEach(function () {
        movies = [{
            id: 1,
            poster_path: 'url1',
            original_title: 'title1'
        }, {
            id: 2,
            poster_path: 'url2',
            original_title: 'title2'
        }];
        fetchMore = jest.fn();

        movieList = shallow(<MovieList fetchMore={fetchMore} movies={movies}/>);
    });

    it('should render a list of movies', function () {
        const list = movieList.find('.Movie');
        expect(list.length).toBe(2);
    });

    it('should hava an intersection handler', function () {
        const intersection = movieList.find(Intersection);

        intersection.props().handler();

        expect(fetchMore).toBeCalled();
    });
});