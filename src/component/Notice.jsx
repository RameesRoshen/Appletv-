import React ,{useEffect, useState}  from 'react'

import instance from '../instance';





function Notice({fetchUrl})  {

    
    // console.log(fetchUrl);
    const [movie , setMovie]=useState()
    const base_url = "https://image.tmdb.org/t/p/original/";

    
const fetchData = async() => {
    const {data} =await instance.get(fetchUrl)
    setMovie(data.results[Math.floor(Math.random()*data.results.length)]);
}

console.log(movie);

useEffect(()=>{
    fetchData()
},[])



  return (
    <div style={{height:'800px' ,width:'100%' ,backgroundImage:`url(${base_url}${movie?.backdrop_path}) ` , backgroundSize:'cover'}}>
        <div className="notice_content">
             {/* logo */} 
           <img
  className="m-0"
  style={{ position: 'relative', top: 0, left: 0, width: '450px', height: 'auto' }}
  src="/25816_1.appletv_38976-removebg-preview.png"
  alt=""
/>

           


        </div>
        

    </div>
  )
}

export default Notice