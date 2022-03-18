import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'

import MoviesService from '../../utils/movies.service';

export default function SearchBar(props) {

    const [search, setSearch] = useState("")

    const onSubmit = e => {
        e.preventDefault()
        MoviesService.searchMovie(search)
            .then(res => {
                console.log(res)
                var array = res.data.results.filter((result) => {
                    return result.titleType === 'movie'
                })
                props.setResults(array)

            })
            .catch(res => {
                console.error(res)
                props.setResults([])
            })
    }

    return <div>
        <Form onSubmit={onSubmit}>
            <Form.Control type="text" name="search" onChange={(e) => { setSearch(e.target.value) }} placeholder="Movie..." required />
            <Button type="submit">Search</Button>
        </Form>

    </div>;
}
