import React from 'react'
import '../Styles/Contact.css';
import {useState , useEffect} from "react";
import {db} from '../Firebaseconfig';

import {
  collection ,
  addDoc , 
  } from 'firebase/firestore'
import { ReactComponent as Contact1 } from '../Assets/contact.svg';

//https://goo.gl/maps/iUy9oU72vM23fHHw9
function Contact() {
  const [newEmail,setNewEmail]=useState("");
    const [newQuery,setNewQuery]=useState("");
    const usersCollectionRef =collection(db , "Users")

    const createUser=async ()=>{
      await addDoc(usersCollectionRef,{email_address:newEmail,query:newQuery});
      window.alert("your data submitted successfully!");
      window.location.reload();
 }
  return (
    <>
   
    <div>Contact</div>
    <section className="container card main ">
       <div className="row">
           <div className="col-lg-6 col-md-6 col-sm-12">
               <Contact1 className="col-12" ></Contact1>
           </div>
           
           <div className=" col-lg-6 col-md-5 col-sm-12">
           <br/>
           <br/>
         <div className="mb-3">
             <label for="exampleFormControlInput1" className="form-label query">Email address</label>
             <input type="email"
              class="form-control" 
              id="exampleFormControlInput1" 
              placeholder="name@example.com"
              onChange={(event)=>{
                setNewEmail(event.target.value);
              }}
              ></input>
           </div>
           <div class="mb-3">
             <label for="exampleFormControlTextarea1" className="form-label  query">Your query</label>
             <textarea 
             className="form-control" 
             id="exampleFormControlTextarea1" 
             rows="3"
             
             onChange={(event)=>{
              setNewQuery(event.target.value);
            }}
             ></textarea>
             <br></br>
                 <button className="btn btn-primary" onClick={createUser}>Submit</button>
           </div>
           </div>
       </div>
    </section>
    </>
  )
}

export default Contact