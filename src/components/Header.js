import React, { Component } from 'react';
import { Button } from 'reactstrap';
import logo from '../img/header-logo200x100.jpg';

class Header extends Component {
  render() {
  return (  <div className="Header">
  <div className="Header-Logo"><img src={logo} alt=""/></div>
  <div className="Header-Btn-Div1"><Button color="success" className="Header-Btn1" href="https://docs.google.com/forms/d/14uIVwv0-j5B_BT8FLyxmL6BLD378yl5Mvb9f418KGeo" target="_blank">Looking For Work?</Button></div>
  <div className="Header-Btn-Div2"><Button color="success" className="Header-Btn2" href="https://docs.google.com/forms/d/1cpPw-0eEZ_3iWxFt02Mm9ygkQJRC6J5ZvHUSRZWzU6g" target="_blank">Place an Order</Button></div>
  <div className="Header-Number-Div"><h4 className="Header-Number">(513)-200-3498</h4></div>
  
  </div>

);
    }
}

export default Header;

