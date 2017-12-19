import React, { Component } from 'react'

export default class Welcome extends Component {

  constructor(){
    super()
  }

  render(){
    return(
      <div className="welcomeBox">
        <div className="welcomeImg"> </div>
        <div className="welcomeText">Welcome</div>
        <div className="line1"></div>
        <div className="welcomeDelivering"> Barrick: Delivering for Shareholders</div>
        <div className="ovalLarge"></div>
        <div className="bigArrowRight"></div>
      </div>
    )
  }
}
