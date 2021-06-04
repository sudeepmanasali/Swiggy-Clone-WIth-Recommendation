import React from 'react'
import "./Help.css"
import PastOrders from './PastOrders'

function Help() {
    document.title = "Help";

    return (
        <div className="help_and_support" >
            <div className="pageTitle">
                <div className="textName">
                    Help & Support
                </div>
                <div className="textDesc">
                Let's take a step ahead and help you better.
                </div>
            </div>

            <div className="help_container">
                <div className="help_col1">
                    <div className="help_list whiteBack">Help With Orders</div>
                    <div className="help_list">General Issues</div>
                    <div className="help_list">Legal, Terms , & Conditions</div>
                    <div className="help_list">FAQ's</div>
                    <div className="help_list">Swiggy SUPER FAQs</div>
                    <div className="help_list">Swiggy Money FAQs</div>
                </div>
                <div className="help_col2">
                    <div className="help_orders">Past Orders</div>
                    <PastOrders />
                    <PastOrders />
                    <PastOrders />

                </div>
            </div>
        </div>
    )
}

export default Help


