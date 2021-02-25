import React from 'react';
import './App.css';
import { HashLink as Link } from 'react-router-hash-link';
//import  { useHistory } from 'react-router-dom';
import './nav.css';
const Navbar = () => {
    
    return(

      
      <nav class="navbar navbar-expand-md  navbar-dark" style={{zIndex:'5',backgroundColor:'#2A3891'}}>
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" style={{}} data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
      <Link className="nav-link js-scroll-trigger" id="navcolor" to="home">Home</Link>
      </li>
      <li class="nav-item">
      <Link className="nav-link js-scroll-trigger" id="navcolor" to="about">About</Link>
      </li>
      <li class="nav-item">
      <Link className="nav-link js-scroll-trigger" id="navcolor" to="career">Carieer</Link>
      </li>  
      <li class="nav-item">
      <Link className="nav-link js-scroll-trigger" id="navcolor" to="market">Market</Link>
      </li>
      <li class="nav-item">
      <Link className="nav-link js-scroll-trigger" id="navcolor" to="blog">Blog</Link>
      </li>  
      <li class="nav-item">
      <Link className="nav-link js-scroll-trigger" id="navcolor" to="contact">Contact</Link>
      </li>
    </ul>
  </div>  
</nav>

    );
}

export default Navbar;