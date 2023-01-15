

import { useState } from 'react';
import './App.css';
import Show from './Components/Show';
import StopWatch from './Components/StopWatch';

function App() {
/*
  const[movieName,setMovieName]=useState("");
  const[movieDescription,setMovieDescription]=useState("");
  const[movieYear,setMovieYear]=useState("");
  const[data,setData]=useState([])
  const[fdata,setFData]=useState([])

  const handler=(e)=>
  {
    e.preventDefault();
    let newData={
      movieName:movieName,
      movieDescription:movieDescription,
      movieYear:movieYear

    }
    setData([...data,newData])
    setFData([...data,newData])
    setMovieName(" ")
    setMovieDescription(" ")
    setMovieYear(" ")
  }
console.log(data);
  const searchMovie=(a)=>
  {

    if(a=="")
    {
      setFData(data)
      return fdata;
    }
    else{
      let filtermovie=data.filter((val)=>
      {
          return val.movieName.includes(a)
      })
      // console.log(filtermovie);
      setFData(filtermovie);
    }
    

    
 
  }
  */
  return (
    <div className="App">
     
       {/* <h1>Movie</h1>
      <input type="text" placeholder='Search movie' onChange={(e)=>searchMovie(e.target.value)}/>
      <br/>
      <br/>
      <form onSubmit={handler}>
        <input type="text" placeholder="Movie Name" value={movieName} onChange={(e)=>setMovieName(e.target.value)}/>
        <br/>
        <input type="text" placeholder="Movie Description" value={movieDescription} onChange={(e)=>setMovieDescription(e.target.value)}/>
        <br/>
        <input type="text" placeholder="Movie Year" value={movieYear} onChange={(e)=>setMovieYear(e.target.value)}/>
        <br/>
        <button>Submit</button>
      </form>
      {
        fdata.map((val,index)=>
        {
          return <Show
          key={index}
          id={index}
          movieName={val.movieName}
          />
        })
      } 
 */}
      <StopWatch/>
    </div>
  );
}

export default App;
