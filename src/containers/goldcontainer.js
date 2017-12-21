import React, { Component } from 'react'
import Nav from '../components/nav'
import Welcome from '../components/welcome'
import Our from '../components/our'
import Chairman from '../components/chairman'
import Information from '../components/information'
import Voting from '../components/voting'
import Annual from '../components/annual'
import Bottom from '../components/bottom'

export default class GoldContainer extends Component {

  constructor(){
    super()
    this.state = {
      user: {}
    }
  }

  // <Our/>
  // <div className="graphHolder">
  //   <img src={require('../Assets/graph.jpg')} style={{height:"100%",width:"100%"}}/>
  // </div>
  // <Chairman/>
  // <Information/>
  // <Voting/>
  // <Annual/>
  // <Bottom/>


  render(){
    return(
      <div stlye={{width:"100%",height:"100%"}}>
        <Nav/>
        <Welcome/>

      </div>
    )
  }
}
