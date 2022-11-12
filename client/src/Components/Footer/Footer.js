import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className="footer-container">
        <div className="first_footer">
            <h1>sangeet</h1>
            <h3>a product by yuvraj singh</h3>
            <div className="social_handles_footer">
            <a href="https://www.instagram.com/ssinghyuvraj02/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram fa-2x" style={{color:"#8d3aa3"}}></i></a>
            <a href="https://twitter.com/Yuvrajsingh0506?t=YJKVSLJBWPs-wsRsyRuaoA&s=09" target="_blank" rel="noreferrer"><i class="fa-brands fa-twitter fa-2x" style={{color:"#1da1f2"}}></i></a>
            <a href="https://github.com/SinghYuvraj0506" target="_blank" rel="noreferrer"><i class="fa-brands fa-github fa-2x"></i></a>
            <a href="https://www.linkedin.com/in/singh-yuvraj002/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin fa-2x" style={{color:"#0274b3"}}></i></a>
            <a href="https://singh-yuvraj.netlify.app/" target="_blank" rel="noreferrer"><i class="fa-solid fa-link fa-2x"></i></a>
            </div>
        </div>
        <div className="second_footer">
            Copyright ©2022 Sangeet. Design by Yuvraj Singh
        </div>
    </div>
  )
}

export default Footer