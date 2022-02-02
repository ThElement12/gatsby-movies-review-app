import React, {useState} from 'react'

import SearchBar from '../components/SearchBar'



export default function Home() { 
    const results = useState([])
    return (
        <div>
            Welcome :D
            This site is still under construction be careful 👷🏼‍♂️
            <SearchBar/>
        </div>
    )
}
