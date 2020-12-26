import React from 'react'
import {NavLink} from 'react-router-dom'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import web from "../image/java-software-development.svg"
import sourav from "../../src/image/Sourav.png"


const About =()=>{


return(
<>
<section id="header" className="d-flex align-items-center">

<div className="container-fluid nav_bg">
<div className="row">
<div className="col-10 mx-auto">
<div className="row">
<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">

    <h1>Welcome to About</h1>
   
    <h2 className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, doloribus. Veniam cupiditate quisquam et eos.</h2>
    <div className="mt-3">
     <NavLink className="btn-get-started" to="/services">Contact now</NavLink>
    </div>

</div>
<div className="col-lg-6 order-1 order-lg-2 header-img">
   {
     <img src={sourav} className="img-fluid rounded-circle header-img" alt="home page"/>
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

export default About