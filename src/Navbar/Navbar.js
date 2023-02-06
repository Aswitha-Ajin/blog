import React from 'react';
  import "../Navbar/navbar.css"
  //import { Link} from 'react-router-dom';
  //import PersonIcon from '@mui/icons-material/Person';


 
  const Navbar=()=> {
    const main=false;
  return (
    <>
    <div className="navbar">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" href="/"> Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/content">Create</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">
            {main && "Logout"}
            </a>
        </li>
        
        
       
      </ul>
      
{
  main ? (
    <img
    className='topImg'
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ncY-heISk8kAf3J_MXmEi2Utnl0LsgsfQg&usqp=CAU"
    alt=""
    />
    ):(
    <>
    <a className="nav-link" href="/login">Login</a>
    <a className="nav-link" href="/register">Register</a>
    </>
  )
}
</div>
  </div>
</nav>

</div>
    </>
  )
}
export default Navbar;