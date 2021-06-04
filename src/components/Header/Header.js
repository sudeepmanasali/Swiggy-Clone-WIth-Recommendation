import React,{useState,useEffect} from 'react'
import {Link, } from "react-router-dom";
import {ToastsContainer, ToastsStore,ToastsContainerPosition} from 'react-toasts';

import {BiSearch} from "react-icons/bi"
import {BsPerson} from "react-icons/bs"
import {IoIosHelpBuoy} from "react-icons/io"
import "./Header.css"
import {FiChevronDown,FiSettings} from "react-icons/fi"
import image from "./swiggy_logo.png"
import {IconContext} from "react-icons"
import axios from "axios"
import Login from '../login/Login'
import { useStateValue } from '../../central_store/StateProvider'

function Header() {
    const [{cart,user,restaurents},dispatch] = useStateValue();
   

    const handleSearch = (e)=>{
       
        var searchKey = e.target.value
        async function fetchData(){
            const result = await axios.get(`http://127.0.0.1:5000/recommendlist?key=${searchKey}`);
       
            if(result.data){
                let uniqueChars = [...new Set(result.data)];

            console.log(uniqueChars)
            let newArr = []
            for(let k of uniqueChars){
                if(restaurents[k]){
                    newArr.push(restaurents[k]);

                }
            }
            ToastsStore.success(`${uniqueChars.length} Restaurents are found ..`);     

            dispatch({
                type:"addRestaurents",
                data:newArr
            })
            }
            else{
            ToastsStore.red(`No Restaurents are found ..`);     
                
            }
         
        }
        fetchData();
    }

    return (
        <IconContext.Provider value={{size:20}}>
        <div className="header flex">
         <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_CENTER} />

            <div className="header_left flex ">
                <div className="nav_link" style={{marginRight:"0px"}}>
                   <Link to="/">  <img src={image} /></Link> 
                </div>
                <div className="nav_link  ">
                    <div className="nav_text underline" style={{fontSize:'14px'}}> HOME</div>
                    <div className="nav_loc"><input type="text" className="Location" placeholder="Ashoka Rd, Lakshar Mohalla"/> </div>
                    <div className="nav_icon" style={{color:"#fc8019"}}><FiChevronDown /></div>
                </div>
            </div>
            <div className="header_right flex ">
                {
                   (window.location.pathname=="/") && (<div className="nav_link searchbox">
                    <BiSearch className="nav_icon"/> 
                  <div className="nav_text">
                      <input type="text" className="nav_text" placeholder="Search" 
                      onBlur={
                          handleSearch
                      }
                      style={{
                          border:"none",
                          outline:"none",
                          fontWeight: 400,
                           fontSize: '16px'
                      }}
                      />
                  </div>

               </div>) 
                }

                <Link to="/offers" className="nav_link  offers">
                    <div className="nav_icon"> <FiSettings /></div>
                    <div className="nav_text"> Offers
                        <span className="top_right">New</span>
                    </div>
                </Link>


                <Link to="/help" className="nav_link flex ">
                    <IoIosHelpBuoy className="nav_icon"/> 
                    <div className="nav_text">Help</div>
                 
                </Link>
                <Link to="/profile" className="nav_link ">
                   <BsPerson className="nav_icon"/> 
                 <div className="nav_text" style={{width:"40px",overflow:"ellipsis"}}>
                     {user ? user : "Login"}
                 </div>
                       
                </Link>
                 
             
                

             
                <Link to="/cart" className="nav_link flex header_cart">
                    <div className="nav_icon cart_info_green"> 
                    {cart.length}
                    </div>
                   <div className="nav_text">Cart</div>

                </Link>


            </div>
        </div>
        </IconContext.Provider>
    )
}

export default React.memo(Header)
