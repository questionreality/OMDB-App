import React from 'react'

function Result({result, openPopup}) {
    return (
        <div className="result" onClick={()=>openPopup(result)}>
            <img src={result.Poster} alt="poster for the movie"/>
            <h3>{result.Title} <span>{result.imdbRating}</span></h3>
        </div>
    )
}

export default Result
