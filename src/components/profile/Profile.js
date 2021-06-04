import React,{useEffect,useState} from 'react'
import "../help/Help.css"
import PastOrders from '../help/PastOrders'
import {CgShoppingBag} from "react-icons/cg"
import {AiFillHeart} from "react-icons/ai"
import {MdPayment} from "react-icons/md"
import {FaMapMarker} from "react-icons/fa"
import axios from 'axios';
import "./Profile.css"
import { useStateValue } from '../../central_store/StateProvider'
function Profile() {
    const [{userId,user,order},dispatch] = useStateValue()
 



    return (
        <div className="help_and_support" >
            <div className="pageTitle">
                <div className="textName">
                    {user}
                </div>
                <div className="textDesc">
                    9380216994 . sudeepmanasali@gmail.com
                </div>
            </div>

            <div className="help_container">
                <div className="help_col1">
                    <div className="help_list whiteBack" style={{display:"flex",alignItems:"center"}}>
                        <CgShoppingBag className="profile_icon"/>
                        <span style={{marginLeft:"10px"}}>Orders</span>
                    </div>

                    <div className="help_list whiteBack" style={{display:"flex",alignItems:"center",background:"transparent"}}>
                        <CgShoppingBag className="profile_icon"/>
                        <span style={{marginLeft:"10px"}}>Super</span>
                    </div>

                    <div className="help_list whiteBack" style={{display:"flex",alignItems:"center",background:"transparent"}}>
                        <AiFillHeart className="profile_icon"/>
                        <span style={{marginLeft:"10px"}}>Favorites</span>
                    </div>

                    <div className="help_list whiteBack" style={{display:"flex",alignItems:"center",background:"transparent"}}>
                        <MdPayment className="profile_icon"/>
                        <span style={{marginLeft:"10px"}}>Payments</span>
                    </div>

                    <div className="help_list whiteBack" style={{display:"flex",alignItems:"center",background:"transparent"}}>
                        <FaMapMarker className="profile_icon"/>
                        <span style={{marginLeft:"10px"}}>Addresses</span>
                    </div>
                    
                  
                </div>
                <div className="help_col2">
                    <div className="help_orders">Past Orders</div>
                    <PastOrders />
                  
                </div>
            </div>
        </div>
    )
}

export default Profile


