import React from 'react'
import {useHistory} from "react-router-dom"
import {Link } from "react-router-dom";

function Emptycart() {
    const history = useHistory();
    document.title = "cart";

    return (
    <div className="cart_box">
        <div className="emptycart">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" className="empty_image" />
        </div>
        <div className="cart_info">
            Your cart is empty
        </div>
        <div className="cart_desc">
        You can go to home page to view more restaurants
        </div>
        <Link to="/" className="see_restaurent" >
            See restaurents Near you
        </Link>
    </div>
    )
}

export default Emptycart
