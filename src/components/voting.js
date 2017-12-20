import React, { Component } from 'react'


export default class Voting extends Component {

  constructor(){
    super()
  }



  render(){
    return(
        <div className="votingDiv">
          <div className="votingBack">
            <div className="votingItems"> 2018 Voting Items</div>
            <div className="votingBoxes">
              <div className="votingBox1">
                <div className="votingCheckbox1"></div>
                <div className="votingCheckmark1">&#x2713;</div>
                <div className="votingLabel1"> Electing Directors </div>
                <div className="votingText1"> You will be electing a Board of Directors consisting of 15 members. Please refer to the section entitled “Directors” on page 22 of this Circular for biographies and more information on the nominees. Directors elected at the Meeting will serve until the end of our next annual shareholders’ meeting or until their resignation, if earlier.  </div>
                <div className="votingRead1">Read More</div>
              </div>

              <div className="votingBox2">
                <div className="votingCheckbox1"></div>
                <div className="votingCheckmark1">&#x2713;</div>
                <div className="votingLabel1"> Electing Directors </div>
                <div className="votingText1"> You will be electing a Board of Directors consisting of 15 members. Please refer to the section entitled “Directors” on page 22 of this Circular for biographies and more information on the nominees. Directors elected at the Meeting will serve until the end of our next annual shareholders’ meeting or until their resignation, if earlier.  </div>
                <div className="votingRead1">Read More</div>
              </div>

              <div className="votingBox3">
                <div className="votingCheckbox1"></div>
                <div className="votingCheckmark1">&#x2713;</div>
                <div className="votingLabel1"> Electing Directors </div>
                <div className="votingText1"> You will be electing a Board of Directors consisting of 15 members. Please refer to the section entitled “Directors” on page 22 of this Circular for biographies and more information on the nominees. Directors elected at the Meeting will serve until the end of our next annual shareholders’ meeting or until their resignation, if earlier.  </div>
                <div className="votingRead1">Read More</div>
              </div>

            </div>

          </div>


          <div style={{display:"inlineBlock"}}>
            <div className="votingCast"> Ready to cast your vote? </div>
            <div className="votingButton">Vote Now</div>

          </div>
        </div>
    )
  }
}
