import React, { Component } from 'react'
export default class Nav extends Component {

  constructor(){
    super()
  }



  render(){
    return(
      <div className="navBar">
        <div className="navBox1">
          <img src={require('../Assets/Barrick_logo.png')} className="navLogo"/>
        </div>
        <div className="navBox2">
          <div className="navLink">
            <div className="navLinkWord">Our Board</div>
          </div>
          <div className="navLink">
            <div className="navLinkWord">Our Company</div>
          </div>
          <div className="navLink">
            <div className="navLinkWord3">Our Pay</div>
          </div>
          <div className="navLink">
            <div className="navLinkWord">2018 Meeting</div>
          </div>
        </div>
        <div className="navBox3">
          <div className="navProxy1"> Download Proxy</div>
          <div className="navProxy2"> Annual Report</div>
        </div>
        <div className="navBox4">
          <div className="navButton">Vote Now</div>
        </div>
      </div>
    )
  }
}
