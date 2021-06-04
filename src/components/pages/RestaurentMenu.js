import React from 'react'
import "./RestaurentMenu.css"
import {BsArrowRight} from "react-icons/bs"
import { FaRupeeSign } from 'react-icons/fa'
import { BiRupee } from 'react-icons/bi'
import MenuItems from './MenuItems'
import {useStateValue} from "../../central_store/StateProvider";
import {useParams,useHistory} from "react-router-dom";
import ReactGa from "react-ga";

function RestaurentMenu() {
    const [{restaurents,cart} , dispatch] = useStateValue();
    const {name} = useParams()
    const history = useHistory()
    const idx = restaurents.findIndex((hotel)=>{return name=== hotel.name })
    console.log(restaurents[idx].menu)

    const total = cart.reduce((cost,val)=>{return val.itemCost+cost},0)
    console.log(total);
    document.title = "restaurents-"+name;

    const handleCheckout = ()=>{
        ReactGa.event({
            category:"Button",
            
            action:`Product added to cart...${cart}`
        })

        history.push("/cart")
    }

    return (
        <div>
            <div className="restaurent_menu">
                <div className="restaurent_col1">
                    <div className="menu_list menu_title">Match Day Special Combos</div>
                    <div className="menu_list">Combos</div>
                    <div className="menu_list">Sandwitches</div>
                    <div className="menu_list">Burger</div>
                    <div className="menu_list">Pizza Veg 7 Inch</div>
                    <div className="menu_list">Pizza Non-Veg 7 Inch</div>
                    <div className="menu_list">Pizza Veg 10 Inch</div>
                    <div className="menu_list">Pizza Non-Veg 10 Inch</div>
                    <div className="menu_list">Veg Starter</div>
                    <div className="menu_list">Non Veg Starter</div>
                    <div className="menu_list">Baked pasta</div>



                </div>

                <div className="restaurent_col2">
                   
                            <MenuItems menuItems={restaurents[idx].menu} hotel={restaurents[idx]}/>

                   
                    
                </div>
                <div className="restaurent_col3">
                   {
                       cart.length!=0 ?
                       (
    
                     

                           <React.Fragment>
                           <div className="col3_title">Cart</div>
                            <div className="col3_desc">from <span style={{color:"blue"}}>{name}</span></div>
                            <div className="col3_count_num" style={{fontSize:"13px"}}>{cart.length} ITEM</div>
                                <div className="col3_products_bill" style={{margin:"0"}}>
                                    <div className="products" style={{alignItems:"flex-start",flexDirection:"column"}}>
                                    {cart.map((cartItem)=>(
                                        <div className="products" style={{width:"100%",marginBottom:"10px"}}>
                                            <div className="prod_left" style={{justifyContent:"flex-start"}}>
                                                    <div className="cusineNonVeg">
                                                        <div className="innerboxNonVeg"></div>
                                                    </div>
                                                    <div className="product_name">
                                                    {cartItem.item}
                                                    </div>
                                            </div>
                                            <div className="prod_right">
                                                <div className="products_actions" style={{marginRight:"15px"}}>
                                                        <div className="action">-</div>
                                                        <div className="action">1</div>
                                                        <div className="action">+</div>
                                                </div>
                                                <div className="col3_product_cost" >
                                                    <div ><BiRupee /></div>
                                                    <div >{cartItem.itemCost}</div>
                                                </div>
                                            </div>
                                        </div>   ))        
                     
}
                                    </div>
                                </div>
                                <div className="col3_subtotal">
                                    <div className="col3_col1">
                                        <div>Subtotal</div>
                                        <div style={{fontSize:"12px",color:"#535665",fontWeight:"300",margin:"5px 0px"}}>Extra charges may apply</div>
                                    </div>
                                    <div className="col3_col1">
                                        <FaRupeeSign />
                                        {total}
                                    </div>
                                </div>
                            <div onClick={handleCheckout} className="col3_button" style={{width:"100%"}}>
                                CHECKOUT <BsArrowRight style={{marginLeft:"10px"}}/>
                            </div>

                           </React.Fragment>
                    
                       ):
                       (
                           <div className="empty_cart_menu">
                                        <div className="col3_title">Cart Empty</div>

                               <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" className="empty_image" />
                            <div className="empty_cart_text">
                            Good food is always cooking! Go ahead, order some yummy items from the menu.</div>
                            </div>   
                       )
                   }
                </div>
            </div>
        </div>
    )
}

export default RestaurentMenu
