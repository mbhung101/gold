import React, { Component } from 'react'
export default class Nav extends Component {

  constructor(){
    super()
  }
  render(){
    return(
      <div className="navBar">
        <div className="navBox">
          <img src={require('../Assets/Barrick_logo.png')} className="navLogo"/>
          <div className="navLinks">
            <a className="navLink"> Our Board</a>
            <a className="navLink"> Our Company</a>
            <a className="navLink"> Our Pay</a>
            <a className="navLink"> 2018 Meeting</a>
          </div>
        </div>
          <div className="navBox2">
            <a className="navProxy">Download Proxy </a>
            <a className="navProxy">Annual Report </a>
            <div className="navButton">Vote Now</div>
          </div>
      </div>
    )
  }
}
