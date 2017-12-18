import React, { Component } from 'react'
export default class Nav extends Component {

  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <div className="Navbox">
        <img src={require('../Assets/Barrick_logo.png')} className="logo"/>
          <div className="Navlinks">
          <a className="links"> Our Board</a>
          <a className="links"> Our Board</a>
          <a className="links"> Our Board</a>
          <a className="links"> Our Board</a>
          </div>
          <div className="Downloadproxybox">
            <a className="DownloadProxy"> Our Board</a>
            <a className="DownloadProxy"> Our Board</a>
          </div>
        </div>

      </div>
    )
  }
}
