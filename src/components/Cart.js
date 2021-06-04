import React from 'react'
import { useStateValue } from '../central_store/StateProvider'
import "./Cart.css"
import Cartitems from './Cartitems'  
import DeliverBox from './DeliverBox'
import Emptycart from './Emptycart'

function Cart() {
    const [{cart}]=useStateValue();

    return (
        <div style={cart.length != 0 ? {background:' #e9ecee' }: {background:"white"} }>
            { cart.length==0 ? <Emptycart /> : (
            <div className="filled_cart">
                <div className="left_cart">
                    <DeliverBox />
                </div>
                <div className="right_cart">
                    <Cartitems />
                    <div className="notes">
                        <div className="note">
                            
                        <div className="note_title">
                            Review your order and address details to avoid cancellations
                        </div>
                        <div className="note_desc">
                        <span style={{color:"red"}}>Note:</span> If you choose to cancel, you can do it within 60 seconds after placing order. Post which you will be charged 100% cancellation fee.
                        </div>
                        <div className="note_buttons">
                            <div className="button">
                                Overview
                            </div>
                            <div className="button">
                                Read Policy
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>)}

        </div>
    )
}

export default Cart
