import React, { Component } from 'react'

export default class Our extends Component {

  constructor(){
    super()
  }

  render(){
    return(
      <div className="ourBoxes">
        <div className="ourSmallBox1">
          <img src={require('../Assets/board.png')} className="ourSmallImage"/>
          <div className="ovalSmall"></div>
          <div className="smallArrowRight"></div>
          <div className="ourSmallText">Our Board</div>
          <div className="ourLearnMore">Learn More</div>
        </div>
        <div className="ourLargeBox">
          <img src={require('../Assets/company.jpg')} className="ourSmallImage"/>
          <div className="ovalSmallMid"></div>
          <div className="smallArrowRightMid"></div>
          <div className="ourSmallTextMid">Our Pay</div>
          <div className="ourLearnMoreMid">Learn More</div>
        </div>
        <div className="ourSmallBox2">
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
