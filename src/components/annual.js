import React, { Component } from 'react'

export default class Annual extends Component {

  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <div style={{marginTop:"52px",width:"1440px",height:"528px"}}>
          <img src={require('../Assets/footer-crowd.png')} style={{width:"1440px",height:"528px",position:"absolute"}}/>
          <div className="annualDetails">Annual Meeting Details</div>
          <div className="annualWhen">When</div>
          <div className="annualWhere">Where</div>
          <div className="annualDate">Tuesday, April 13th, 2018</div>
          <div className="annualPlace">Heartbreak Hotel</div>
          <div className="annualTime">9:30 PDT</div>
          <div className="annualAddress">99 Union Street Los Angeles, CA 98101</div>
        </div>
      </div>
    )
  }
}
