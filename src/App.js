import React, {useState} from 'react';
import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'

import axios from 'axios'

function App() {
  const [state,setState] = useState({
    s:"",
    results:[],
    selected:{}
  })

  const apiurl = "http://www.omdbapi.com/?apikey=426fe8ff"
  const search = (e)=>{
    setState({...state,results:[]})
    if(e.key==="Enter")
    axios(apiurl+"&s="+state.s).then(({data})=>{
      let result = data.Search;
      if(result!==undefined)
      result.map(res=>{
        axios(apiurl+"&i="+res.imdbID).then(({data})=>{
          setState(prevState=>{
            return {...prevState,results: prevState.results.concat(data).sort(
              (a,b)=>{
                if((+a.imdbRating-+b.imdbRating)>0)
                  return -1
                else
                  return 1
              }
            )}
          })
        })
      })
    })
  }
  const handleInput = (e) => {
    let s = e.target.value;
    setState(prevState=>{
      return{...prevState,s:s}
    })
    console.log(state.s) 
  } 
  const openPopup = result => {
      setState(prevState=>{
        return{...prevState,selected:result}
      })
  }
  const closePopup = () => {
    setState(prevState=>{
      return{...prevState,selected:{}}
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>OMDB</h1>
      </header>
      <main>
          <Search handleInput = {handleInput} search={search}/>
          <Results results={state.results} openPopup={openPopup}/>
          {(typeof state.selected.Title!="undefined")?<Popup selected={state.selected}closePopup={closePopup}/>:false}
      </main>
    </div>
  );
}

export default App;
