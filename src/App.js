import React, {useState} from 'react';
import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'

import axios from 'axios'

function App() {
  const [state,setState] = useState({
    s:"",
    results: [],
    selected:{}
  })
  const apiurl = "http://www.omdbapi.com/?apikey=426fe8ff"
  const search = (e)=>{
    if(e.key==="Enter")
    axios(apiurl+"&s="+state.s).then(({data})=>{
      console.log(data)
      let result = data.Search;
      setState(prevState=>{
        return{...prevState,results:result} 
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
  const openPopup = id => {
    axios(apiurl+'&i='+id).then(({data})=>{
      let result = data;
      setState(prevState=>{
        return{...prevState,selected:result}
      })
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
        <h1>Movie Database</h1>
      </header>
      <main>
          <Search handleInput = {handleInput} search={search}/>
          <Results results={state.results}/>
          {(typeof state.selected.Title!="undefined")?<Popup selected={state.selected}closePopup={closePopup}/>:false}
      </main>
    </div>
  );
}

export default App;
