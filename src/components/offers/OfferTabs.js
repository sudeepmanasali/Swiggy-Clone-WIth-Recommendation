import React,{useState} from 'react'
import {BsArrowUpDown} from "react-icons/bs"
import Card from '../Card';

function OfferTabs() {
  const [hotel,setHotel] = useState("McDonald's");
    
	function openCity(evt, cityName) {
		var i, tabcontent, tablinks;
    setHotel(cityName);
		tabcontent = document.getElementsByClassName("tabcontent");
	
		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
		  tablinks[i].className = tablinks[i].className.replace(" active", "");
		}

		evt.currentTarget.className += " active";
	}

    return (
       <div  style={{backgroundColor:"#fff"}}>
            <div className="tab" style={{background:"#fff",marginTop:"0px",position:'sticky',top:'0px',zIndex:'2000'}}>
               
                <div className="tab_right" style={{justifyContent:'flex-start'}}>
                    <div className="tablinks active" style={{fontSize:"20px",color:'#282c3f',padding:"24px 0px 20px",fontWeight:"500", margin:"0 10px"}} onClick={(event)=>{openCity(event, 'Mylari')}}>Restaurents</div>
                    <div className="tablinks" style={{fontSize:"20px",color:'#93959f',padding:"24px 0px 20px",fontWeight:"500",margin:"0 10px"}} onClick={(event)=>{openCity(event, 'Paris')}}>Payment Offers/ Coupons</div>
                 
                </div>
             </div>
                
            <div id="London" className="tabcontent">
                <Card hotel={hotel}/>
                <Card hotel={hotel}/>
                <Card hotel={hotel}/>
                <Card hotel={hotel}/>
                <Card hotel={hotel}/>

            </div>
       </div>
    )
}

export default OfferTabs
