import React from 'react'
import "./PastOrders.css"
import image from "../images/mylari.jpg"
import {BiRupee} from "react-icons/bi"
function PastOrders() {

    return (
        <div className="order_item_detail">
                <div className="order_item">
                    <div className="order_item_image">
                        <img src={image} alt="" />
                    </div>
                    <div className="order_item_info">
                        <div className="order_item_name">Original Vinayaka Mylari
                        <span className="orderDate" style={{fontSize:"13px",display:"inline-block",float:"right",
                            marginLeft:"130px",    color: '#686b78',fontWeight:"300"
                            }}>Cancelled on Sat, Nov 30, 2019, 07:24 PM</span>
                        </div>
                        <div className="order_item_addr">Mysore South</div>
                        <div className="order_item_more">ORDER #58197199800 | Sat, Nov 30, 2019, 07:23 PM</div>
                        <div className="order_item_action">VIEW DETAILS</div>
                    </div>

                  
                </div>
                <div className="order_help">
                    <div className="">
                        <div className="numItems">Masala Dosa x 3</div>
                        <div className="getHelp">GET HELP</div>
                    </div>
                    <div className="">
                        <div className="total_paid">Total Paid: <BiRupee /> 160\</div>
                    </div>
        
                </div>

           
        </div>
    )
}

export default PastOrders


// Original Vinayaka Mylari
// Mysore South
// VIEW DETAILSCancelled on Sat, Nov 30, 2019, 07:24 PM
// Dosa Masala x 3