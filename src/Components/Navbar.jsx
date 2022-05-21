import React from 'react'
import { Link} from 'react-router-dom';
import '../Styles/Navbar.css';

// import {useNavigate} from 'react-router-dom';


function Navbar() {
  // const history = useHistory();
//   const navigate = useNavigate();
//   this.handleClickhandleClick=()=>{
//     navigate('/Contact')
// }

  return (
    <div className="nav">
    <Link to="Contact" className="Contact navlinks ">Contact us</Link>
    <Link to="About" className="About navlinks">About us</Link>
    <Link to="Teams" className="Teams navlinks">Teams</Link>
    
</div>
  )
}

export default Navbar