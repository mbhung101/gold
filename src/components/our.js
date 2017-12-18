import React, { Component } from 'react'

export default class Our extends Component {

  constructor(){
    super()
  }

  render(){
    return(
      <div className="ourBoxes">
        <div className="ourSmallBox">
          <img src={require('../Assets/board.png')} className="ourSmallImage"/>
          <div className="ovalSmall"></div>
          <div className="smallArrowRight"></div>
          <div className="ourSmallText">Our Board</div>
          <div className="ourLearnMore">Learn More</div>
        </div>
        <div style={{marginLeft:"20px",display:"inline-block"}}> </div>
        <div className="ourLargeBox">
          <img src={require('../Assets/company.jpg')} className="ourLargeImage"/>
          <div className="ovalSmallMid"></div>
          <div className="smallArrowRightMid"></div>
          <div className="ourSmallTextMid">Our Company</div>          
          <div className="ourLearnMoreMid">Learn More</div>
        </div>
        <div style={{marginLeft:"20px",display:"inline-block"}}> </div>
        <div className="ourSmallBox">
          <img src={require('../Assets/pay.jpg')} className="ourSmallImage"/>
          <div className="ovalSmall"></div>
          <div className="smallArrowRight"></div>
          <div className="ourSmallText">Our Pay</div>
          <div className="ourLearnMore">Learn More</div>
        </div>
      </div>
    )
  }
}
