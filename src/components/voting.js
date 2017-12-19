import React, { Component } from 'react'


export default class Voting extends Component {

  constructor(){
    super()
  }
  render(){
    return(
        <div className="voteBox">
          <img src={require('../Assets/vote.jpg')} style={{width:"1440px",height:"763px",marginTop:"108px"}}/>
          <div className="votingItems"> 2018 Voting Items</div>
        </div>
    )
  }
}
