import React from 'react'
import "./offers.css"
import image from "./offer.png"
import OfferTabs from './OfferTabs'

function Offers() {
    document.title = "Offers";

    return (
        <div className="offers">
            <div className="offersBanner">
                <div className="offers_info">
                    <div style={{color:"white",fontSize:"52px",fontWeight:"600"}}>Offers for you</div>
                    <div style={{color:"#fff",fontSize:"22px",letterSpacing:"0.8",fontWeight:"300"}}>Explore top deals and offers exclusively for you!</div>
                </div>
                <div className="offers_image">
                    <img src={image} />
                </div>
            </div>
            <OfferTabs />
         </div>
    )
}

export default Offers
