import React from 'react'
import {NavLink} from 'react-router-dom'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import web from "../image/java-software-development.svg"
import sourav from "../../src/image/software2.svg"


const Common =(props)=>{


return(
<>
<section id="header" className="d-flex align-items-center">

<div className="container-fluid nav_bg">
<div className="row">
<div className="col-10 mx-auto">
<div className="row">
<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">



<h1>{props.fname}<strong className="brand-name"> 
    <br/>{props.name}{props.lname}</strong></h1>
   
    <h2 className="my-3">{props.describe}</h2>
    <div className="mt-3">
     <NavLink className="btn-get-started" to={props.visit}>{props.btnname}</NavLink>
    </div>

</div>
<div className="col-lg-6 order-1 order-lg-2 header-img">
   {
     <img src={props.imgsrc} className="img-fluid animated header-img" alt="home page"/>
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

export default Common