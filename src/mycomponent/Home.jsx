import React from 'react'
import {NavLink} from 'react-router-dom'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import web from "../image/java-software-development.svg"


const Home =()=>{


return(
<>
<section id="header" className="d-flex align-items-center">

<div className="container-fluid nav_bg">
<div className="row">
<div className="col-10 mx-auto">
<div className="row">
<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">

    <h1>Hi, I am <strong className="brand-name"> 
    <br/>Sourav Barman</strong></h1>
   
    <h2 className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
    <div className="mt-3">
     <NavLink className="btn-get-started" to="/services">Get Started</NavLink>
    </div>

</div>
<div className="col-lg-6 order-1 order-lg-2 header-img">
   {
     <img src={web} className="img-fluid animated" alt="home page"/>
   } 
</div>
</div>
</div>
</div>
</div>
</section>
</>
);

}

export default Home