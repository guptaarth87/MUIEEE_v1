import React, { Component } from 'react'

export class Carousel extends Component {
  render() {
    return (
      <>
       <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item landingImage active">
            <img src={require('../Assets/4.jpg')} className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item landingImage">
            <img src={require('../Assets/2.jpg')} className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item landingImage">
            <img src={require('../Assets/3.jpg')} className="d-block w-100" alt="..."></img>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
      
      </>
    )
  }
}

export default Carousel