import React from 'react'
import "./Footer.css"
import apple_image from "./../icons/apple.png"
import google_image from "./../icons/google.png"
import microsoft_image from "./../icons/microsoft.png"

function Footer() {
    return (
        <div className="footer">
            <div className="f_links">
            <a href="#">Home  </a><pre>   |   </pre>
            <a href="#"> Terms and conditions  </a><pre>   |   </pre>
            <a href="#"> Privacy Policy  </a><pre>   |   </pre>
            <a href="#"> Collection Statement  </a><pre>   |   </pre>
            <a href="#"> Help  </a><pre>   |   </pre>
            <a href="#"> Manage Account</a>
            <div className="f_copy"> copyright &#169; 2016 Demo Streaming. All rights reserved</div>
            </div>
            
            <div className="f_icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i> </a>
           </div>
           <div className="f_images"> 
           <a href="#"> <img src={apple_image} alt="appleimage" /></a>
           <a href="#"> <img src={google_image} alt="googleimage" /></a>
           <a href="#"> <img src={microsoft_image} alt="microsoft" /></a>
               
           </div>
           
           

          
            


        </div>
    )
}

export default Footer
