import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Services =(props)=>{
return(
<>
<div className="col-md-4 col-10 mx-auto">
<div className="card mb-4 cardwidth box-shadow">

        <img src={props.imgsrc}  alt="Marketing" className="card-top-top imagesizefit"/>


<div className="card-body">
<h5 className="card-title">{props.titlename}</h5>
<p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, impedit?</p>
<NavLink to="/" className="btn btn-primary ">Know more</NavLink>
</div>


</div>
</div>



</>
);

}

export default Services