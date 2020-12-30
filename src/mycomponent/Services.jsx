import React from 'react'
import Card from "./Card"
import Sdata from "./ServiceData"
const Services =()=>{


return(
<>
<div className="my-5">
<h1 className="text-center" >Our Services</h1>
</div>
<div className="container-fluid mb-5">
<div className="row">
    <div className="col-10 mx-auto">
<div className="row gy-10">

{
Sdata.map((val,ind)=>{

return <Card
key={ind}
imgsrc={val.imgsrc}
titlename={val.title}

></Card>

})


}

</div>

</div>

</div>


</div>

</>
);

}

export default Services