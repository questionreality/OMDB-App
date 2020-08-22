import React from 'react'
import Result from './Result'
function Results({results,openPopup}){ 
    if(results!=undefined)
    return( <div>
            <section className="results">
                {results.map(result=>(
                    <Result result={result} key={result.imdbID}openPopup={openPopup}/>
                ))}
            </section>
        </div>
    )
    else
    return(
        <div className="results">
            Wait a moment
        </div>
    )
}

export default Results
