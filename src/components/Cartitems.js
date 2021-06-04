import React from 'react'
import { BiRupee } from 'react-icons/bi'
import "./cartitem.css"
import {BsDot} from "react-icons/bs"
import image from "./images/restaurents/rest1.jpg"
import {useStateValue} from "../central_store/StateProvider";

import axios from "axios";

import {ToastsContainer, ToastsStore,ToastsContainerPosition} from 'react-toasts';
import {useHistory} from "react-router-dom";
import ReactGA from "react-ga";


function Cartitems() {
    document.title = "Cart";

    const [{cart,userId,cartHotel} , dispatch] = useStateValue();
    const total = cart.reduce((cost,val)=>{return val.itemCost+cost},0)
    const tax = total * 0.16;
    const deliverCharge = 20;
    const history = useHistory()
    
    const addToCart = ()=>{
        ReactGA.plugin.require('ecommerce') 
        const submitTransit = async()=>{
            const data = JSON.stringify()
            console.log(data)
            const result = await axios.post(`http://localhost:8000/addTransactions`,
          {
                "amount":total+tax+deliverCharge,
                "items":JSON.stringify(cart),
                "userId":userId,
                "hotel_name":cartHotel.name,
    
                "deliver_address":cartHotel.address,
    
            })
          
            // ReactGA.event({
            //     category:"Product",
            //     action:`Product added to cart .`,
            //     label:"Checkout Page"

            // })

            ReactGA.plugin.execute('ecommerce', 'addTransaction', {
                'id': '1234',                     // Transaction ID. Required.
                'name': 'test checkout',          // Product name. Required.
                'sku': 'DD23444',                 // SKU/code.
                'category': 'Party Toys',         // Category or variation.
                'price': '11.99',                 // Unit price.
                'quantity': '1'                   // Quantity.
              })
            if(result.data){
          
              dispatch({
                  type:"addToCart",
                  data:[]
              }) 
              window.alert("orderPlaced Successfully ..!")
              history.push("/success")  

            }
            else{
              ToastsStore.success('Ordered is not placed ...! ');
              setTimeout(()=>{history.push("/")},3000)     

            }
            console.log(result.data)
          
          }
          submitTransit()
        

        
    }
    return (
        
        <div className="right_cart_top">
         <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_CENTER} />

            <div className="cart_hotel_info">
                <div className="cart_hotel_image">
                    <img src={image} />
                </div>
                <div className="cart_hotel_desc">
                    <div className="cart_hotel_name">
                        {cartHotel.name}
                    </div>
                    <div className="cart_hotel_area">
                       { cartHotel.cusines}
                    </div>
                </div>
            </div>


            <div className="products_bill" >

            {cart.map((cartItem)=>(
                    <div className="products" key={cartItem.item}style={{width:"100%",marginBottom:"10px"}}>
                        <div className="prod_left" style={{justifyContent:"flex-start"}}>
                            <div className="cusineNonVeg">
                                <div className="innerboxNonVeg"></div>
                            </div>
                            <div className="product_name">
                            {cartItem.item}
                            </div>
                        </div>
                        <div className="prod_right">
                            <div className="products_actions">
                                    <div className="action">-</div>
                                    <div className="action">1</div>
                                    <div className="action">+</div>

                                    {/* Icon */}
                                </div>
                                <div className="product_cost">
                                <span><BiRupee /> {cartItem.itemCost}</span> 
                                </div>
                        </div>
                    </div>
            ))}               
                <div className="any_suggestions">
                    <input type="text" className="suggestion_box" placeholder='"Any suggestion we will pass... '></input>
                </div>

                <div className="box_info">
                        <div className="right" >
                            <input type="checkbox" />
                    </div>
                    <div className="right">
                        <div style={{fontWeight:"600",fontSize:"14px"}}>Opt is for no contact delivery</div>
                        <p>Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)</p>
                    </div>
                </div>

                <div className="apply_coupon">
                    <input type="text" className="coupon_box" placeholder='Apply Coupon'></input>
                </div>

                <div className="bill_details">
                    <div className="heading">
                        Bill details
                    </div>
                
                    <div className="item_total">
                        <div className="item_name">Item Total</div>
                        <div className="item_value"><BiRupee />{total}</div>
                    </div>
                    <div className="item_total">
                        <div className="item_name">Delivery partner fee </div>
                        <div className="item_value"><BiRupee />{deliverCharge}</div>
                    </div>
                    <div className="item_total underline_tax">
                        <div className="item_name">Taxes and Charges</div>
                        <div className="item_value"><BiRupee />{tax}</div>

                    </div>
                </div>

            
            </div>
    
            <div className="item_total to_pay">
                        <div className="item_name">TO PAY</div>
                        <div className="item_value"><BiRupee />{total+tax+deliverCharge}</div>

            </div>

            <div className="item_total to_pay" style={{justifyContent:"center"}}>
                        <div className="optionButton" onClick={addToCart}>
                            Add To cart
                        </div>

            </div>

                
        </div>
    )
}

export default Cartitems
