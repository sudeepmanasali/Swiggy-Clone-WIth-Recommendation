import React from 'react'
import "./Login.css"
function Login() {
    return (
        <div className="login_slider">
            <div className="login_container">
               <div className="login_top">
                <div className="info">
                        <h3>Login</h3>
                        <p>Or <span>create an account</span></p>
                    </div>
                    <div className="login_image">

                    </div>
               </div>
                
                <div className="login_box">
                    <input typ="text" placeholder="Phone number" />
                </div>
                <div className="login_button">
                    Login
                </div>
            </div>

            <div className="login_container">
               <div className="login_top">
                <div className="info">
                        <h3>Sign UP</h3>
                        <p>Or <span>Login to your account</span></p>
                    </div>
                    <div className="login_image">

                    </div>
               </div>
                
                <div className="login_box">
                    <div className="input_text">Phone number</div>
                    <input typ="text" placeholder="Phone number" />
                </div>
                <div className="login_box">
                    <div className="input_text">Name</div>
                    <input typ="text" placeholder="Name" />
                </div>
                <div className="login_box">
                    <div className="input_text">Email</div>
                    <input typ="text" placeholder="Email" />
                </div>
                <div className="login_box">
                    <div className="input_text">Password</div>
                    <input typ="password" placeholder="Phone number" />
                </div>
                <div className="login_box">
                    <a href="#">Have a referral code?</a>
                </div>
                <div className="login_button">
                    Continue
                </div>
                <div className="terms_condition">
                By creating an account, I accept the Terms & Conditions
                </div>
            </div>
        </div>
    )
}

export default Login
