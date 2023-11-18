import React from 'react'
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';


function Banner() {

    useEffect(() => {
        // After 5 seconds, hide the background image and show the video
        const timer = setTimeout(() => {
          document.getElementById('background-image').style.display = 'none';
          document.getElementById('background-video').style.display = 'block';
        }, 2000);
    
        return () => clearTimeout(timer); // Cleanup the timer on component unmount
      }, []);

  return (


   
    
        <div  style={{ position: 'relative', width: '100%', height: '100vh' }}>
             
        {/* Background Image */}
       <div>
       
     {/* Background Image */}
            <div
              id="background-image"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url(https://stuff.co.za/wp-content/uploads/2023/10/Apple-TV-increase-header-v2.png)',
                backgroundSize: 'cover',
                opacity: 1, // Set the opacity to 1 for the initial 5 seconds
              }}
            ></div>
        
            {/* Background Video */}
            <video
              id="background-video"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'none', // Initially hidden
              }}
              autoPlay
              muted
              loop
            >
              <source src="/Upcoming_Series_and_Films_Apple_TV__8bF69F-ftXA_137.mp4"
                  
                   type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        
           
          </div>
           {/* logo */} 
        <img
  className="m-0"
  style={{ position: 'relative', top: 0, left: 0, width: '200px', height: 'auto' }}
  src="/25816_1.appletv_38976-removebg-preview.png"
  alt=""
/>
<div className='ms-5' style={{ position: 'absolute' ,bottom:0 ,color:'white'  }}>
    <h4>The Home of <br/>Apple Orginals</h4>
    <p className='p-0'>Enjoy star-stubbed ,award-winning <br/> series,films,and more.</p>
    <Button className='mb-3 ' variant="light" style={{width:'200px' ,fontWeight: 'bold' ,marginTop:'-10px'}}>Try It Free</Button>
    <p className="ms-4 " style={{color:'whitesmoke' ,fontSize:'10px' ,marginTop:'-15px'}}>7 days free ,then $9.99/month</p>
</div>

       </div>
   
  )
}

export default Banner