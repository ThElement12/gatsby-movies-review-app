import React, { useState, useEffect } from 'react'

import MoviesService from '../../utils/movies.service';


export default function MovieDetails(props) {

    const movie = {
        id: props.imdb_id,
        title = props.title,
        release_date = props.year === 0 ? "" : props.year,
        description = "",
        image = ""
    }

    useEffect(() => {
        


    }, [])









    return (
        <div>MovieDetails</div>
    )
}
