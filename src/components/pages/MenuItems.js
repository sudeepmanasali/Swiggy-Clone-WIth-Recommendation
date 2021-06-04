import React from 'react'
import "./MenuItems.css";
import {BsStarFill} from "react-icons/bs"
import mylari from "../images/mylari.jpg";
import { BiRupee } from 'react-icons/bi';
import {useStateValue} from "../../central_store/StateProvider";
import {useHistory} from "react-router-dom"

function MenuItems({menuItems,hotel}) {
    const arr = menuItems.itemsName.split(",")
    const [{user,cart} , dispatch] = useStateValue();
    const history = useHistory()

    console.log(menuItems,hotel);
    console.log("cart",cart)
    const addToCart = (e,action)=>{
            if(user==""){
                history.push("/login")
            }
            else{
                dispatch({
                    type:"addToCart",
                    data:{
                        item:e.target.id,
                        itemCost:menuItems.itemCost,
                        itemCount:1
                    }
                })
                dispatch({
                    type:"cartHotel",
                    data:hotel
                })
            }
        
        
    }
    return (
        <div>
            <div className="item_list">
                <div className="item title_padding" >
                    <div className="recommended">
                        Recommended
                        <div className="num_items">
                        {arr.length} Items
                        </div>
                    </div>        
                </div>
{
    arr.map((item)=>(
        <div className="item">
        <div className="item_info">
                <div className="item_rate">
                    <div className="cusineNonVeg">
                        <div className="innerboxNonVeg"></div>
                    </div>
                    <span style={{color:"#fc8019",marginLeft:"10px",fontSize:"13px"}}><BsStarFill />Best Seller</span>
                </div>
                <div className="itemname">
                {item}
                </div>
                <div className="itemcost">
                <BiRupee />{menuItems.itemCost}
                </div>
           
        </div>
        <div className="item_profile">
            <img src={mylari} className="item_image"/>
            <div className="add_to_cart_actions">
                <div id={item} onClick={(e)=>{addToCart(e,"remove")}} >-</div>
                <div >1</div>
                <div id={item} onClick={(e)=>{addToCart(e,"add")}}>+</div>
            </div>
        </div>

    </div>
    ))
}
               
            </div>
        </div>
    )
}

export default MenuItems
