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
    <Link to="Contact" className="Contact btn btn-primary">Contact us</Link>
    <Link to="About" className="About btn btn-primary">About us</Link>
    <Link to="Teams" className="Teams btn btn-primary">Teams</Link>
    
</div>
  )
}

export default Navbar