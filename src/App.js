import React,{Suspense,useEffect,useState} from 'react';
import {BrowserRouter as Router , Route, Switch,Redirect} from "react-router-dom"
import "./App.css"
import Header from "./components/Header/Header"
import Banner from "./components/Banners/Banner"

import Reloader from './components/pages/Reloader';
import AuthForm from './components/Auth/AuthForm';
import axios from "axios"
import { useStateValue } from './central_store/StateProvider';

import ReactGA from "react-ga";
import { createBrowserHistory } from 'history';
import Successfully from './components/pages/Successfull';

const Offers = React.lazy(()=>import('./components/offers/Offers'));
const Profile = React.lazy(()=>import('./components/profile/Profile'));
const Help = React.lazy(()=>import('./components/help/Help'));
const RestaurentMenu = React.lazy(()=>import('./components/pages/RestaurentMenu'));
const RestaurentBanner = React.lazy(()=>import('./components/pages/RestaurentBanner'));
const Cart  = React.lazy(()=>import('./components/Cart'));
const  Tabs  = React.lazy(()=>import('./components/tabs/Tabs'));


function App() {
    const [{user}, dispatch] = useStateValue();
   
    const history = createBrowserHistory()
    history.listen((location)=>{
        ReactGA.initialize('G-786CN2R42E')

        ReactGA.pageview(location.pathname)
        console.log(location.pageview)
    })


  
    useEffect(()=>{
        async function fetchData(){
            const result = await axios.get("http://127.0.0.1:5000/hotels");
            dispatch({
              type:"addRestaurents",
              data:result.data
            })
        }
        fetchData();
      },[]);

 

  


  return (
        <Router>
           
            <Header />
            
             
                        <Switch>
                            <Suspense fallback={<Reloader />}>
               
                                <Route path="/cart">
                                    <Cart />
                                </Route>
                                
                                <Route path="/help">
                    

                                    <Help />
                                </Route>
                                
                                <Route path="/profile">
                                    {user ? (<Profile />) : ( <Redirect to="login" />) }
                                </Route>

                                <Route path="/restaurent/:name">
                                    <RestaurentBanner />
                                    <RestaurentMenu />
                                </Route>
                         
                                <Route path="/login">
                                    <AuthForm />
                                </Route>
                                <Route path="/offers">
                                    <Offers />
                                </Route>
                                <Route path="/success" >
                                    <Successfully />
                        
                                </Route>    
                            
                                <Route path="/" exact>
    { document.title = "   Order food online from India's best food delivery service. Order from restaurants near you"}
                                    <Banner />
                                    <Tabs />
                                </Route>    
                            </Suspense>
                        </Switch>
             
      
        
        </Router> 
      
  );
}
export default App;
