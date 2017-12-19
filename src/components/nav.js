import React, { Component } from 'react'
export default class Nav extends Component {

  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <div className="navBox">
        <img src={require('../Assets/Barrick_logo.png')} className="logo"/>
          <div className="navLinks">
            <a className="navLink"> Our Board</a>
            <a className="navLink"> Our Company</a>
            <a className="navLink"> Our Pay</a>
            <a className="navLink"> 2018 Meeting</a>
          </div>
          <a className="navProxy"> Download Proxy </a>
          <a className="navProxy"> Annual Report </a>
          <div className="navButton"> Vote Now </div> 
        </div>

      </div>
    )
  }
}
