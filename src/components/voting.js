import React, { Component } from 'react'


export default class Voting extends Component {

  constructor(){
    super()
  }



  render(){
    return(
        <div>
          <div className="votingBack"></div>
          <div className="votingItems"> 2018 Voting Items</div>
          <div className="votingBoxes">
            <div className="votingBox">
              <div className="votingCheckbox1"></div>
              <div className="votingCheckmark1">&#x2713;</div>
              <div className="votingLabel1"> Electing Directors </div>
              <div className="votingText1"> You will be electing a Board of Directors consisting of 15 members. Please refer to the section entitled “Directors” on page 22 of this Circular for biographies and more information on the nominees. Directors elected at the Meeting will serve until the end of our next annual shareholders’ meeting or until their resignation, if earlier.  </div>
              <div className="votingRead1">Read More</div>
            </div>
            <div className="votingBox">
              <div className="votingCheckbox2"></div>
              <div className="votingCheckmark2">&#x2713;</div>
              <div className="votingLabel2"> Appointing the Auditor </div>
              <div className="votingText2"> PricewaterhouseCoopers LLP (PwC) has been our external auditor since 1983. The Board, on the recommendation of the Audit Committee, recommends that PwC be reappointed as auditor and that the Board be authorized to set the auditor’s remuneration. The audit firm appointed at the Meeting will serve until the end of the Company’s next annual shareholders’ meeting.  </div>
              <div className="votingRead2">Read More</div>
            </div>
            <div className="votingBox">
              <div className="votingCheckbox3"></div>
              <div className="votingCheckmark3">&#x2713;</div>
              <div className="votingLabel3"> Say on Pay Advisory Vote</div>
              <div className="votingText3"> The Board has adopted a non-binding advisory vote relating to executive compensation to solicit feedback on our approach to executive compensation. The previous say on pay advisory vote held in 2016 was supported with the approval of 90.9% of those shareholders present at our 2016 annual meeting and voting in person or by proxy. </div>
              <div className="votingRead3">Read More</div>
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
