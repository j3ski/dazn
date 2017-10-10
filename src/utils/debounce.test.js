import debounce from './debounce';

describe('debounce', function () {
    let fn;

    beforeEach(function () {
        fn = jest.fn();
        jest.useFakeTimers();
    });

    it('should not run the function right away', function () {
        let debounced = debounce(fn);

        debounced();

        expect(fn).not.toBeCalled();
    });

    it('should call the function after the default debounce interval', function () {
        let debounced = debounce(fn);

        debounced();

        jest.runTimersToTime(100);

        expect(fn).toBeCalled();
    });

    it('should call the function once if called before debounce interval', function () {
        let debounced = debounce(fn);
        debounced();
        debounced();

        jest.runTimersToTime(100);

        expect(fn.mock.calls.length).toBe(1);
    });

    it('should accept custom debounce interval', function () {
        let debounced = debounce(fn, 1000);

        debounced();

        jest.runTimersToTime(500);

        expect(fn).not.toBeCalled();

        jest.runTimersToTime(1000);

        expect(fn).toBeCalled();
    });
});
