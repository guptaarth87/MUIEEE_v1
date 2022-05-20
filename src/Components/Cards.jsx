import React, { Component } from 'react'
import {useState , useEffect} from "react";
import '../Styles/Cards.css'
import {db} from '../Firebaseconfig';

import {
  collection ,
  getDocs,
  } from 'firebase/firestore'

function Cards() {
  const usersCollectionRef =collection(db , "Events");
  const [events_data ,setEvents]=useState([]);
 
  useEffect(()=>{ 
    const getUsers=async ()=>{
       const data = await getDocs(usersCollectionRef);
        console.log(data);
      setEvents(data.docs.map((doc)=>({...doc.data(),
        id :doc.id})))
    };
    getUsers()
  },[] )

    return(
      
      <div className="row container">
      {
        
     events_data.map((item, index) =>{

         return<> 
                  
         <div className="events_section card col-lg-3 col-md-5 col-sm-7">
          <span className="name"><strong>{item.name}</strong></span>
          <span className="host"><strong>host :</strong> {item.host}</span>
          <span className="mobile_no"><strong>Mobile No :</strong> {item.mobileNo}</span>
          <span className="date"><strong>Date :</strong> {item.date}</span>
          <span className="venue"><strong>venue :</strong> {item.venue}</span>
         
          <hr className="line"></hr>
         </div>
         </>

        })
            
      }
    
    </div>)
    
  }

 


export default Cards