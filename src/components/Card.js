import React from 'react'
import "./Card.css"
import {AiTwotoneStar} from "react-icons/ai"
import {BsDot} from "react-icons/bs"
import {BiRupee} from "react-icons/bi"
import image from "./images/restaurents/rest1.jpg"
import {useHistory} from "react-router-dom";

function Card({hotel}) {
    const history = useHistory();
    const restaurentClick = (e)=>{
        history.push(`/restaurent/${hotel.name}`)
    }
    return (
        <div className="hotel_card" onClick={restaurentClick}>
            <img src={image} alt={image} className="hotel_image"/>
            <div className="hotel_name">{hotel.name}</div>
            <div className="hotel_desc">{hotel.cuisines}</div>
            <div className="hotel_info">
                <div className="rating"> <AiTwotoneStar /><div>{hotel.rate}</div></div>
                <div><BsDot /></div>
                <div className="">31 MINS</div>
                <div><BsDot /></div>
                <div className=""><BiRupee />{hotel.cost} FOR TWO</div>
            </div>
            <div className="hotel_offer" style={{color:"#8a584b"}}>40% off | Use SWIGGYIT </div>
            <div className="hotel_link">Quick View </div>
        </div>
    )
}

export default React.memo(Card)
