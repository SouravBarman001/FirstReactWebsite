import React from 'react'
import {NavLink} from 'react-router-dom'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import web from "../image/java-software-development.svg"
import Common from './Common'


const Home =()=>{


return(
<Common 

fname="Hi, I am " 
lname="Sourav Barman"
describe="Lorem ipsum dolor sit amet consectetur adipisicing elit."
imgsrc={web}
 visit="/services"
  btnname="Get Started"


></Common>

);

}

export default Home