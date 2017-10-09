export default (array, key) => {
    const keyPool = new Set();

    return array.filter(elt => {
        if(keyPool.has(elt[key])) {
            return false;
        }
        keyPool.add(elt[key]);
        return true;
    })
}