import React from 'react'
import Result from './Result'
function Results({results,openPopup}){ 
    return( <div>
            <section className="results">
                {results.map(result=>(
                    <Result result={result} key={result.imdbID}openPopup={openPopup}/>
                ))}
            </section>
        </div>
    )
}

export default Results
