import React from 'react'
import sourav from "../../src/image/software2.svg"
import {NavLink} from 'react-router-dom'

import Common from './Common'

const About =()=>{


return(
<>
<Common 
name="Welcome to About" imgsrc={sourav} visit="/services" btnname="Contact now"
describe="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, doloribus. Veniam cupiditate quisquam et eos."
  ></Common>

</>
)
}

export default About