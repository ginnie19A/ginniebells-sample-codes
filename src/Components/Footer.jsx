import React, { Component } from 'react';
import '../Css/Footer.css';
import logo from '../ibm.png';

class Footer extends Component {
  render() {
    return (
      <div>
           <div className="footer">
            <marquee scrollamount="45" behavior="scroll" direction="side">
                    <img src={logo} width="190" height="100" alt="IBM" />
                    
                    
                  </marquee>
          </div>
      
      </div>
        
    );
  }
}

export default Footer;
