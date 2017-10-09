export default (fn, debounceInterval = 100) => {
    let currentTimeoutId;
    return (...args) => {
        clearTimeout(currentTimeoutId);
        currentTimeoutId = setTimeout(() => fn(...args), debounceInterval);
    }
}