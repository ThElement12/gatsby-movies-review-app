import React, { useState } from 'react'

import SearchBar from '../components/SearchBar'
import Header from '../components/header'


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
                    results.map((movie) => (
                        <li>
                            {movie.title}
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}
