import uniq from './uniq';

describe('uniq', function () {
    it('should filter out non-unique elements from an array by key', function () {
        let array = [
            {key: 1},
            {key: 2},
            {key: 1},
            {key: 3}
        ];

        expect(uniq(array, 'key')).toEqual([
            {key: 1},
            {key: 2},
            {key: 3}
        ]);
    });
});