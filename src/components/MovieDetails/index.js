import React, { useState, useEffect } from 'react'

import { Card } from 'react-bootstrap';

import MoviesService from '../../utils/movies.service';


export default function MovieDetails(props) {
    
    
    const movie = {
        id: props.movie.id,
        title: props.movie.title,
        release_date: props.movie.year === 0 ? "" : props.movie.year,
        image: props.movie.image,
        principals: props.movie.principals
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    {movie.title}
                </Card.Title>
                <Card.Subtitle>
                    Release data: {movie.release_date}
                </Card.Subtitle>
            </Card.Body>
        </Card>
    )
}
