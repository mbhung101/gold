import React, { Component } from 'react'

export default class Chairman extends Component {

  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <div className="executiveBox">
          <div className ="executiveQuotes">&ldquo;</div>
          <div className ="executiveQuote"> I like golddddddddddddddddd </div>
          <div className ="executiveTitle">Letter from the Executive Chairman</div>
          <div className ="executiveReadMore">Read More</div>

          <img src={require('../Assets/Chairman.png')} className="executiveImage" />
          <div className="line2"></div>
        </div>
        <img src={require('../Assets/barrick-icon.png')} className="backgroundLogo"/>        
          <div style={{marginTop:"52px"}}> </div>

          <img src={require('../Assets/barrick-icon.png')} className="backgroundLogo2"/>
          <img src={require('../Assets/director.png')} className="directorImage" />
          <div className="directorBox">
            <div className ="directorTitle">Letter from the Lead Director</div>
            <div className ="directorQuotes">&ldquo;</div>
            <div className ="directorQuote"> I like golddddddddddddddddd </div>
            <div className ="directorReadMore">Read More</div>
          </div>
          <div className="line3"></div>


      </div>
    )
  }
}
