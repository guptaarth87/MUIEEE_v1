import React from 'react'
import '../Styles/Home.css';
import { BrowserRouter } from 'react-router-dom';
import Cards from '../Components/Cards';
import Navbar from '../Components/Navbar';
import Carousel from '../Components/Carousel';
import Footer from '../Components/Footer';
import { ReactComponent as Mains } from '../Assets/Mains.svg';

import Subscribe from '../Components/Subscribe';

function Home() {
  return (
      <>  
      <Navbar/>
   <div className="x">
       <Carousel/>
   <br></br>
      <div className="row container">
          <h2><strong>MUIEEE</strong></h2>
          <div className='col-1'></div>
          <div className="col-lg-5 col-md-6 col-sm-12 mid-text">
           
           <p>MUIEEE is a community of intellectuals who are set to 
bring a change in the technical world and society through innovation and technological advancements.
</p>We provide students a platform to inquire and discover not only the field of electrical and electronics 
but also various other domains.
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
        
           <Mains className='col-12 mid-img' />
          </div>
      </div>
      <br/><br/><br/>
      <div className="container events">
       <h2><strong>Events</strong></h2>
       <Cards/>
     
      </div>
     
         <br/><br/><br/>
         <Footer/>
       </div>
   <br></br>
      </>
    
   
 
  )
}

export default Home