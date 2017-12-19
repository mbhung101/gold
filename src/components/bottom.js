import React, { Component } from 'react'

export default class Bottom extends Component {

  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <div className="bottomBar"></div>
        <div className="Navbox">
          <img src={require('../Assets/Barrick_logo.png')} className="logo"/>
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
