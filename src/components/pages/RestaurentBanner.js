import React from 'react'
import "./restaurentBanner.css"
import resimage from "../images/restaurents/onesta.jpg"
import {AiFillStar} from "react-icons/ai"
import {FaRupeeSign} from "react-icons/fa"
import {BsSearch,BsHeart} from "react-icons/bs"
import {useParams} from "react-router-dom";
import {useStateValue} from "../../central_store/StateProvider"
function RestaurentBanner() {
    const [{restaurents},dispatch] = useStateValue();
    const {name} = useParams()
    const idx = restaurents.findIndex((hotel)=>{return name=== hotel.name })
    // console.log(name);
    return (
        <div className="restaurent" >
         
            <div className="restaurent_banner" >
                <div className="restaurent_image">
                    <img src={resimage} alt={resimage}/>
                </div>
                <div className="restaurent_info">
                    <div className="restaurent_info_name">
                        {restaurents[idx]["name"]}
                    </div>
                    <div className="restaurent_info_desc">
                    {restaurents[idx]["cusines"]}
                    </div>

                    <div className="restaurent_info_addr">
                          {restaurents[idx]["address"]}
                        
                    </div>

                    <div className="restaurent_info_rating">
                        <div className="restaurent_option">
                            <div className="opt_name">
                                <AiFillStar /> 
                        {restaurents[idx]["rate"]}

                            </div>
                            <div className="opt_desc">
                                {restaurents[idx]["votes"]}+ ratings
                            </div>
                        </div>
                        <div className="restaurent_option">
                            <div className="opt_name">
                                    33 MINS
                                </div>
                                <div className="opt_desc">
                                    Deliver Time
                            </div>
                        </div>
                        <div className="restaurent_option">
                             <div className="opt_name">
                                <FaRupeeSign />                        {restaurents[idx]["cost"]}

                            </div>
                            <div className="opt_desc">
                                Cost For Two
                            </div>
                        </div>
                    </div>

                    <div className="restaurent_actions">
                        <div className="restaurent_search">
                            <BsSearch style={{fontWeight:"600"}}/>
                            <input type="text" placeholder="Search for dishes..." />
                        </div>

                        <div className="restaurent_search" style={{padding:"10px 15px"}}>
                            <input type="checkbox" id="check" style={{marginRight:"10px"}}/>
                            <div className="veg_only" for="check">Veg Only</div>
                        </div>

                        <div className="restaurent_search" style={{padding:"10px 15px"}}>
                            <BsHeart style={{marginRight:"10px"}}/>
                            <div className="favorates">Favorates</div>
                        </div>

                    </div>
                </div>
                <div className="restaurent_offer_box">
                        <div className="offer_text">OFFER</div>
                        <div className="availableOffers">
                            <div className="offer">
                                <div className="offer_icon">
                                     <FaRupeeSign />
                                </div>
                                <div className="offer_desc">
                                25% off + Extra 10% up to INR 100 cashback in Swiggy Money wallet with ICICI cards | Use code UNLIMITED
                                </div>
                            </div>


                            <div className="offer">
                                <div className="offer_icon">
                                     <FaRupeeSign />
                                </div>
                                <div className="offer_desc">
                                50% off up to ₹100 | Use code TRYNEW
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default RestaurentBanner
