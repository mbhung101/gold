import React, { Component } from 'react'

export default class Information extends Component {

  constructor(){
    super()
  }

  render(){
    return(
      <div>
        <div className="addBox">
          Additional Information
        </div>
        <div className="infoBoxes">
          <div className="infoBox">
            <img src={require('../Assets/blueLogo.jpg')} style={{display:"inlineBlock",width:"380px",height:"194.2px"}}/>
            <div className="infoSmallText">Notice of Meeting</div>
            <div className="infoArrow"></div>
          </div>
          <div className="infoBox">
            <img src={require('../Assets/blueLogo.jpg')} style={{display:"inlineBlock",width:"380px",height:"194.2px"}}/>
            <div className="infoSmallText">Notice of Meeting</div>
            <div className="infoArrow"></div>
          </div>
          <div className="infoBox">
            <img src={require('../Assets/blueLogo.jpg')} style={{display:"inlineBlock",width:"380px",height:"194.2px"}}/>
            <div className="infoSmallText">Notice of Meeting</div>
            <div className="infoArrow"></div>            
          </div>
        </div>
      </div>
    )
  }
}
