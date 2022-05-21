import React, { Component } from 'react'
import { Link} from 'react-router-dom';
import { ReactComponent as Instagram } from '../Assets/instagram.svg';
import { ReactComponent as Linkedin } from '../Assets/linkedin.svg';
import { ReactComponent as Github } from '../Assets/github.svg';
import '../Styles/Teams.css';

class Teams extends Component {
  nav=()=>{
    window.open("www.google.com");
  }
  render() {
   
    return (
      <>
      <h2><strong>Team</strong></h2>
  <section>
  <div class="containerx">
            <div class="cardx">
                <div class="content">
                    <div class="imgBx">
                        <img src="Mohit Namdev.jpg" alt="" height="200px" width="170px" />
                    </div>
                    <div class="contentBx">
                        <h3>Name<br></br><span>Designation</span></h3>
                    </div>
                </div>
            <ul class="sci">
               <a class='social-icon-link linkedin'  target='_blank'  rel="noopener"        aria-label='Linkedin'
                 href="https://linkedin.com"
                 >
                  <Linkedin className="social-icon"/>
                </a>
                <a class='social-icon-link instagram'   target='_blank'  rel="noopener"  aria-label='Instagram'
                  href="https://instagram.com"
                >
                  <Instagram className="social-icon" />
                </a>
                 <a  class='social-icon-link github' target='_blank' rel="noopener" aria-label='Github'
                  href="https://github.com"
                  >
                   <Github className="social-icon"/>
                 </a>   
                </ul>
            </div>

            <div class="cardx">
                <div class="content">
                    <div class="imgBx">
                        <img src="Mohit Namdev.jpg" alt="" height="200px" width="170px" />
                    </div>
                    <div class="contentBx">
                        <h3>Name<br></br><span>Designation</span></h3>
                    </div>
                </div>
            <ul class="sci">
               <a class='social-icon-link linkedin'  target='_blank'  rel="noopener"        aria-label='Linkedin'
                 href="https://linkedin.com"
                 >
                  <Linkedin className="social-icon"/>
                </a>
                <a class='social-icon-link instagram'   target='_blank'  rel="noopener"  aria-label='Instagram'
                  href="https://instagram.com"
                >
                  <Instagram className="social-icon" />
                </a>
                 <a  class='social-icon-link github' target='_blank' rel="noopener" aria-label='Github'
                  href="https://github.com"
                  >
                   <Github className="social-icon"/>
                 </a>   
                </ul>
            </div>
            </div>
  </section>
    

      </>
    )
  }
}

export default Teams