import React from 'react';
import logo from './assets/img/logos.png';
import img from './assets/img/ad1.png';
import img1 from './assets/img/add.jpeg';
import img2 from './assets/img/ad3.png';
import './media.css';
import Navbar from './nav'
import Footer from './footer';
const Market =() => {
    return(
      <div>
<Navbar />
      <div class="jumbotron jumbotron-fluid" background-color="red">
      <div class="container-fluid"><br></br>
      <div class="row">
        <div class="col-sm-5">
        <h2 class="jumbo-heading">Partner with BAE</h2>
        <p class="jumbo-content">Partner with us and monetize through an unexplored medium of your's</p>
        <button type="button" class="btn btn-outline-secondary">CONTACT SALES</button>
        </div>

        <div class="col-sm-7" id="jumbo-image"><img src={logo} alt="Logo" width="412px" height="412px"/></div>
      </div>
      </div>
    </div>
      <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>What are you looking for ? Here we go !</h2>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <a href=""><img src={img} alt="Logo" width="130px" height="130px"/></a>
              <h3>MONETIZE</h3>
              <p class="text-center">Make additional money on every transaction of yours</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <a href=""><img src={img1} alt="Logo" width="130px" height="130px"/></a>
              <h3>GIFT</h3>
              <p class="text-center"> Gift your customers for transacting with you</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <a href=""><img src={img2} alt="Logo" width="130px" height="130px"/></a>
              <h3>STICKINESS</h3>
              <p class="text-center">Enhance customer stickiness on your platform</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    <Footer/>
    </div>


    );
}

export default Market;