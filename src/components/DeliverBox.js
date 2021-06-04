import React from 'react'
import "./DeliverBox.css"
import {CgHome} from "react-icons/cg"
import {RiMapPinLine} from "react-icons/ri"

function DeliverBox() {
   
    return (
        <div className="deliverBox">
            <div className="title">
                Choose a delivery address
            </div>
            <div className="deliver_desc">
            Multiple addresses in this location
            </div>
            <div className="delivery_options" style={{marginTop:'50px'}}>
                    <div className="option">
                        <div className="deliveryOption" style={{fontSize:"25px"}}>
                            <CgHome />
                        </div>                    
                        <div className="deliveryOptionDesc">
                            <div className="optionName" style={{fontWeight:"600"}}>
                                Home
                            </div>
                            <div className="optionDesc">
                            #141,35th East Cross,ahoka road ,halladkere,mysore, Ashoka Rd, Lashkar Mohalla, Mandi Mohalla, Mysuru, Karnataka 5700...    
                            </div>  

                            <div className="optionName" style={{margin:"15px 0px",fontSize:"12px"}}>
                                29 MINS                   
                            </div>  
                            <div className="optionButton" >
                                Deliver Here
                            </div>
                        </div>    
                    </div>

                    <div className="option">
                        <div className="deliveryOption" style={{fontSize:"25px"}}>
                            <RiMapPinLine />
                        </div>                    
                        <div className="deliveryOptionDesc">
                            <div className="optionName" style={{fontWeight:"600"}}>
                                Other
                            </div>
                            <div className="optionDesc">
                            #141,35th East Cross,ahoka road ,halladkere,mysore, Ashoka Rd, Lashkar Mohalla, Mandi Mohalla, Mysuru, Karnataka 5700...    
                            </div>  

                            <div className="optionName" style={{margin:"15px 0px",fontSize:"12px"}}>
                                29 MINS                   
                            </div>  
                            <div className="optionButton" >
                                Deliver Here
                            </div>
                        </div>    
                    </div>


                    
                    <div className="option">
                        <div className="deliveryOption" style={{fontSize:"25px"}}>
                            <RiMapPinLine />
                        </div>                    
                        <div className="deliveryOptionDesc">
                            <div className="optionName" style={{fontWeight:"600"}}>
                               Add New Address
                            </div>
                            <div className="optionDesc">

                            Ashoka Rd, Lashkar Mohalla, Mandi Mohalla, Mysuru, Karnataka 570001, India
                            </div>  

                            <div className="optionName" style={{margin:"15px 0px",fontSize:"12px"}}>
                                29 MINS                   
                            </div>  
                            <div className="optionNewButton" >
                                ADD NEW
                            </div>
                        </div>    
                    </div>
            </div>
        </div>
    )
}

export default DeliverBox
