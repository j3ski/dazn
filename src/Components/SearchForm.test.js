import React from 'react';
import {shallow} from 'enzyme';
import SearchForm from './SearchForm';

describe('<SearchForm />', function () {
    let searchForm, onChange;
    beforeEach(function () {
        onChange = jest.fn();

        searchForm = shallow(<SearchForm onChange={onChange}/>);
    });

    it('should render an input', function () {
        let input = searchForm.find('input');
        expect(input).toBeTruthy();
    });

    it('should handle changes', function () {
        let input = searchForm.find('input');
        input.simulate('change', {target: {value: 'foo'}});

        expect(onChange).toBeCalledWith('foo');
    });
});