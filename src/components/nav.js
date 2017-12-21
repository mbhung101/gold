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
          <div className="navLink"> Our Board </div>
          <div className="navLink"> Our Company </div>
          <div className="navLink"> Our Pay </div>
          <div className="navLink"> 2018 Meeting </div>
        </div>
        <div className="navBox3">
          <div className="navProxy"> Download Proxy</div>
          <div className="navProxy"> Annual Report</div>
        </div>
        <div className="navBox4">
          <div className="navButton">Vote Now</div>
        </div>
      </div>
    )
  }
}
