import React from 'react'
import {Link} from "react-router-dom"
function Successfully () {
    document.title = "Success";

    return (
        <div style={{textAlign:"center",fontSize:"40px",fontWeight:"500",color:"black"}}>
                OrderPlaced Successfully
        <Link to="/" style={{color:"orange"}} className="see_restaurent" >
            See restaurents Near you
        </Link>
        </div>
    )
}

export default Successfully

