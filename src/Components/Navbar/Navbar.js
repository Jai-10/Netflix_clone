import React, { useState, useEffect } from 'react'
import './Navbar.css';

function Navbar() {

     const [handleShow, setHandleShow] = useState(false);

     useEffect(() => {
          window.addEventListener("scroll", () => {
               if (window.scrollY > 140) {
                    setHandleShow(true);
               }
               else {
                    setHandleShow(false);
               }
          });
          return ()=>{
               window.removeEventListener('scroll');
          };
     }, [])



     return (
     <div className={`nav  ${handleShow && "blackBg"}`}>
          <img
               className="nav_logo"
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
               alt="Netflix Logo"
          />
          <img
               className="nav_avatar"
               src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
               alt="Netflix Logo"
          />
     </div>
     )
}

export default Navbar