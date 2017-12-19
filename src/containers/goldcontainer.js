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
  render(){
    return(
      <div>
        <Nav/>
        <Welcome/>
        <Our/>
        <img src={require('../Assets/graph.jpg')} style={{height:665,width:1260,marginLeft:86,marginTop:20}}/>
        <Chairman/>
        <Information/>
        <Voting/>
        <Annual/>
        <Bottom/>
      </div>
    )
  }
}
