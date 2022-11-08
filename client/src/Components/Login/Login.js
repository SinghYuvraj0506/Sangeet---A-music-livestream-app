import React from 'react'
import "./Login.css"
import {useNavigate} from "react-router-dom"

function Login() {
    const navigate = useNavigate()
  return (
    <div className="login_container">
        <img src={require("../Images/login2.png")} alt="backgroundloginimage" />
        <div className="login_box">
            <h1>Get Started</h1>
            <div className="login_buttons">
                <button style={{backgroundColor:"#3C60BB"}} onClick={()=>{navigate("/")}}>
                <i class="fa-brands fa-facebook" style={{color:"white"}}></i>
                <span>Login with Facebook</span>
                </button>
                <button style={{backgroundColor:"#444444"}} onClick={()=>{navigate("/")}}>
                <i class="fa-brands fa-google" style={{color:"white"}}></i>
                <span>Login with Google</span>
                </button>
            </div>
            <div className="termsinlogin">
                By signing in you agree to our terms and conditions.
            </div>
        </div>
        <div className="login_footer">
            a product designed and built by YUVRAJ SINGH
        </div>
    </div>
  )
}

export default Login