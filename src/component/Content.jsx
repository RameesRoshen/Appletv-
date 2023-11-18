
import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Content.css'
import { Button } from 'react-bootstrap';

function Content({title,fetchUrl,isPresent})  {

    const[allMovies , setAllmovies]=useState()
    const base_url = "https://image.tmdb.org/t/p/original/";
//    console.log(fetchUrl);

const fetchData = async() => {
    const {data} =await instance (fetchUrl)
    // console.log(data.results);

    setAllmovies(data.results)

}

console.log(allMovies);
    
    useEffect(()=>{
        fetchData()
    },[])
  
    return (

       
            <div className='content ' id="appletv">
                <h1>{title}</h1>
                   
      
    
                <div className="movie-content ">
                     {
                        allMovies?.map(item=>(
                            <img className={`movie ${isPresent && 'movie_poster'} `} src={`${base_url}${isPresent?item.poster_path:item.backdrop_path}`} alt="no image" />
                        ))
                    } 
                 

                </div>
            </div>
       
      
    )
  
}


export default Content