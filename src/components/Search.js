import React from 'react'

function Search({handleInput,search}) {
    return (
        <section className="searchbox-wrap">
            <input type="text" className="searchbox" placeholder="Search for a movie" onChange={handleInput} onKeyPress={search}/>
        </section>
    )
}

export default Search
