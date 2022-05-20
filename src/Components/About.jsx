import React, { Component } from 'react'

import { ReactComponent as Landing } from '../Assets/about us landing.svg';
import { ReactComponent as Work } from '../Assets/work with us.svg';
import { ReactComponent as Contact } from '../Assets/contact.svg';

import '../Styles/About.css'

export class About extends Component {
  render() {
    return (
      <>
     <div className="container">
     
         <div className="row about_text">
             <div className="col-lg-5 col-md-6 col-sm-10 ">
                 <h2><strong>About Us</strong></h2>
                 MUIEEE is the student chapter of the world’s largest technical professional society IEEE, which stands for 
Institute of Electrical and Electronics Engineering. MUIEEE is a community of intellectuals who are set to 
bring a change in the technical world and society through innovation and technological advancements. 
We provide students a platform to inquire and discover not only the field of electrical and electronics 
but also various other domains. We host online and offline events, workshops, and contests to help 
students to be industry-ready.
             </div>
             <Landing className="col-5 ht"></Landing>
         </div>

         <div className="row work_with">
         <h2><strong>work with us</strong></h2>
         <Work className="col-5 ht"></Work>
             <div className="col-lg-5 col-md-6 col-sm-10 ">
              
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, aperiam. Quas numquam sed possimus nesciunt distinctio odio architecto suscipit accusamus unde. Ipsa aut nobis necessitatibus id doloribus laboriosam totam ipsum molestias, accusantium nostrum vel suscipit atque consequuntur laudantium quibusdam ea deserunt distinctio? Consequuntur, sequi labore.
             </div>  
         </div>

         <div className="row cont">
         <h2><strong>connect us!</strong></h2>
         <Contact className="col-5 ht"></Contact>
                   <div className="col-lg-5 col-md-6 col-sm-10">
                   
                   <div class="mb-3">
                 <label for="exampleFormControlInput1" class="form-label">Email address</label>
                 <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
               </div>
               <div class="mb-3">
                 <label for="exampleFormControlTextarea1" class="form-label">your query!</label>
                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                 <br></br>
                 <button className="btn btn-primary" onClick>Submit</button>
             </div>  
         </div></div>
     </div>

       
          </>
    )
  }
}

export default About





