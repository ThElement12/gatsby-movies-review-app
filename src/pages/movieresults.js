import React, { useState, useEffect } from 'react';

import MoviesService from '../utils/movies.service';

export default function MovieResults(props) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        MoviesService.searchMovie("matrix")
        .then(res => res.data)
        .then(res => setMovies(res))
        .catch(err => console.error(err));
    }, [])
    
    return (<div>
        {movies["movie_results"].map((item)=>{
            return <div>
                <h4>{item.title}</h4>
                <h5>{item.year}</h5>
            </div>

        })}
        {console.log(movies)}
        {JSON.stringify(movies, null, 2)}
    </div>
    );
}
