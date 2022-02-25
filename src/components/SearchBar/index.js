import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'

import MoviesService from '../../utils/movies.service';

export default function SearchBar(props) {

    const [search, setSearch] = useState("")

    const onSubmit = e => {
        e.preventDefault()
        MoviesService.searchMovie(search)
            .then(res => props.setResults(res.data.movie_results))
            .catch(res => {
                console.error(res)
                props.setResults([])})
    }

    return <div>
        <Form onSubmit={onSubmit}>
            <Form.Control type="text" name="search" onChange={(e) => { setSearch(e.target.value)}} placeholder="Movie..."required/>
            <Button type="submit">Search</Button>
        </Form>

    </div>;
}
