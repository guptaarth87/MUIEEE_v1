import React from 'react';
import {useState , useEffect} from "react";
import {db} from '../Firebaseconfig';
import '../Styles/Footer.css';
import {
  collection ,
  addDoc , 
  } from 'firebase/firestore'

function Footer() {
    const [newEmail,setNewEmail]=useState("");
    const [newQuery,setNewQuery]=useState("");
    const usersCollectionRef =collection(db , "Users")

    const createUser=async ()=>{
        await addDoc(usersCollectionRef,{email_address:newEmail,query:newQuery});
        window.alert("your data submitted successfully!");
        window.location.reload();
   }

  return (
    <div className="footer">
       <div className="footer container">  
        <div className="row">
          <div className='col-1'></div>
          <div className="col-lg-5 col-md-5 col-sm-10">
           <h2><strong>Connect us!</strong></h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ea commodi repudiandae quae repellendus, reiciendis sint expedita quibusdam tempore numquam voluptatem necessitatibus ad doloremque autem blanditiis libero aliquid dolores nam fugiat odio accusamus quaerat. Similique molestiae dicta ex aliquid obcaecati quo sed odio, ullam sit.</p>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-10 ">
          <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label" >Email address</label>
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
        <label for="exampleFormControlTextarea1" class="form-label">your query!</label>
        <textarea class="form-control" 
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
        
        </div>
      

    </div>
  )
}

export default Footer