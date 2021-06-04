import React,{ useState ,useRef} from 'react';
import {useHistory} from "react-router-dom"
import axios from "axios";
import './AuthForm.css';
import {useStateValue} from "../../central_store/StateProvider"
import {ToastsContainer, ToastsStore,ToastsContainerPosition} from 'react-toasts';
import ReactGA from "react-ga"


const AuthForm = () => {
  document.title = "login";
  const [{},dispatch] = useStateValue();
  const history = useHistory()

  const [isLogin, setIsLogin] = useState(false);
  const userName = useRef();
  const userEmail = useRef();
  const userPassword = useRef();
  const userPhone = useRef();


  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const loginHandler = (e)=>{
    e.preventDefault();
    const enteredEmail = userEmail.current.value;
    const enteredPassword = userPassword.current.value;
    const login = async()=>{
      const result = await axios.get(`http://localhost:8000/customer_login/${enteredEmail}/${enteredPassword}`)
      
      if(result.data.length > 0)
      {
      
        ReactGA.event({
          category: "Log In",
          action: "User pressed the SignIn button",
        });
        const name =result.data[0].user_name;
        const userID =result.data[0].user_id;
        ReactGA.set({
          userName: name,
        })
        dispatch({
          type:"addUser",
          data:{"name":name,"id":userID}
        })
      }
      history.push("/")

    }
    login()
   
  }

  const signUpHandler = (e)=>{
    e.preventDefault();
    const enteredEmail = userEmail.current.value;
    const enteredName = userName.current.value;

    const enteredPassword = userPassword.current.value;
    const enteredPhone = userPhone.current.value;

    const signup = async()=>{
      const result = await axios.post(`http://localhost:8000/addcustomer`,{
        "username":enteredName,
        "useremail":enteredEmail,
        "userpassword":enteredPassword,
        "userphone":enteredPhone,
      })
    
      if(result.data){
        ReactGA.event({
          category: "Sign Up",
          action: "User pressed the big blue sign up button",
        });
        ToastsStore.success('Registered Successfully ...! ');

        switchAuthModeHandler()
      }
    
    }
    signup()
  
  }
  return (
    <section className='auth'>
         <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_CENTER} />

      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form >
      {!isLogin ? (  <div className='control'>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' ref={userName} required />
        </div>):" "
        }
        <div className='control'>
          <label htmlFor='email'>Your Email</label>
          <input type='text' id='email' ref={userEmail} required />
        </div>
        <div className='control'>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' ref={userPassword} required />
        </div>
        {!isLogin ? (  <div className='control'>
          <label htmlFor='phone'>Your Phone</label>
          <input type='number' id='phone' ref={userPhone} required />
        </div>):" "
        }
        <div className='actions'>
          
        {isLogin ? (<button onClick={loginHandler}>Login</button>) : <button onClick={signUpHandler}>Create Account</button>}
          <button
            type='button'
            className='toggle'
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
