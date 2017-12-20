import React, { Component } from 'react'

export default class Bottom extends Component {

  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <div className="bottomBox">
          <img src={require('../Assets/Barrick_logo.png')} className="navLogo"/>
          <div className="bottomSearch">
            <div className="ui icon input">
              <input type="text" placeholder="Search..." />
              <i aria-hidden="true" className="search icon"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
