import {API_KEY} from '../config.local';

export default (query, page = 1) =>
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`)
    .then(resp => resp.json());