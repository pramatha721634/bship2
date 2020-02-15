import React from 'react'
import logo from '../logo.svg';
import {Link} from 'react-router-dom';


 function Navbar() {
    return (
      
        <nav className="navbar navbar-expand-sm navbar-white bg-white ">
        
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className=" m-auto  ">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Link className="navbar-brand ml-auto m-4 " href="http://www.amazon.com">
            <img id="brand-image"src="http://bship.azurewebsites.net/images/BSHIP%20Logo.jpg" alt="Website Logo" style={{width:'220px'}}/>
            </Link>
          <ul className="navbar-nav ml-2 ">
            <li className="nav-item active">
              <Link className="nav-link text-dark text-uppercase font-weight-bold mr-4 " to="/">Home&nbsp;</Link>
               <span className="sr-only">(current)</span>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark text-uppercase mr-4 font-weight-bold" to="/brandbship">Brandbship&nbsp;</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark text-uppercase mr-4 font-weight-bold" to="/whyjoin">Whyjoin&nbsp;</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link text-dark text-uppercase mr-4 font-weight-bold" to="/ecteam" tabindex="-1" aria-disabled="true"> ECTeam&nbsp;</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark text-uppercase mr-4 font-weight-bold" to="/members"> Members&nbsp;</Link>
            </li>
           
             {/* <li className="nav-item">
              <Link className="nav-link text-white text-uppercase mr-4" to="/navigate"> Navigate&nbsp;</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link text-dark text-uppercase mr-4 font-weight-bold" to="/contact"> Contact us&nbsp;</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link text-white text-uppercase ml-0" to="/subscribe"> Subscribe&nbsp;</Link>
            </li>  */}
            
        
          </ul>
          </div>
        </div>
      </nav> 
    );
}
export default Navbar;