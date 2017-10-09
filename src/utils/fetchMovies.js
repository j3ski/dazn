import {API_KEY} from '../config.local';

export default query =>
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    .then(resp => resp.json());