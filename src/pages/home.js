import React, { useState } from 'react'

import SearchBar from '../components/SearchBar'
import Header from '../components/header'
import MovieDetails from '../components/MovieDetails'


export default function Home() {
    const [results, setResults] = useState([])

    return (
        <div>
            <Header siteTitle="Reviews"/>
            Welcome :D
            This site is still under construction be careful 👷🏼‍♂️
            <SearchBar setResults={setResults} />
            <ul>
                {
                    results.map((movie, i) => (
                        <li key={i}>
                            <MovieDetails movie={movie}/>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}
