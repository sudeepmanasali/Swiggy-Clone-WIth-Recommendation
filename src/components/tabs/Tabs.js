import React,{useState,useEffect} from 'react'
import {BsArrowUpDown} from "react-icons/bs"
import Card from '../Card';
import { useStateValue } from '../../central_store/StateProvider';

function Tabs() {
  const [hotel,setHotel] = useState("McDonald's");
  // const [recommended,setRecommended] = useState([]);
 let [{restaurents}, dispatch] = useStateValue();
   
    restaurents = restaurents.slice(0,14);
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
       <div  className="tabBackground">
            <div className="tab" style={{background:"#fff",padding:"15px 0px",position:'sticky',top:'0px',zIndex:'2000'}}>
                <div className=" tab_left resturent_num"> {restaurents.length} restaurants </div>
                <div className="tab_right">
                    <div className="tablinks active" onClick={(event)=>{openCity(event, 'Mylari')}}>Relevance</div>
                    <div className="tablinks" onClick={(event)=>{openCity(event, 'Paris')}}>Cost For Two</div>
                    <div className="tablinks" onClick={(event)=>{openCity(event, 'Tokyo')}}>Deliver Time</div>
                    <div className="tablinks" onClick={(event)=>{openCity(event, 'Tokyo')}}>Rating</div>
                    <div className="tablinks" onClick={(event)=>{openCity(event, 'Tokyo')}}
                    style={{display:"flex",alignItems:"center"}}
                    >Filters
                       <BsArrowUpDown className="filter_icon"/>
                    </div>
                </div>
             </div>
                
            <div id="London" className="tabcontent">
          
                {
                  restaurents.map((restaurent,index)=>(
                     <Card hotel={restaurent} key={index}/>
                  ))
                }
            </div>
       </div>
    )
}

export default React.memo(Tabs)
