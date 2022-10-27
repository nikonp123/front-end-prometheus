import {sortMovies} from "./helpers.js"

export function getMovies() {
    const url='https://run.mocky.io/v3/1be5a8b1-2625-488e-95a9-83a508b6cb34';  
    return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return sortMovies(data);
    });
    //or
    // .then(sortMovies)
    
};
