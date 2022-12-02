// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  state = {teamMatches: [], isLoading: true}

  componentDidMount() {
    this.getMatches()
  }

  getMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(url)
    const data = await response.json()
    const updatedData = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }
    this.setState({teamMatches: updatedData, isLoading: false})
  }

  render() {
    const {teamMatches, isLoading} = this.state
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      id,
      manOfTheMatch,
      matchStatus,
      result,
      secondInnings,
      umpires,
      venue,
    } = teamMatches
    console.log(competingTeamLogo)

    return (
      <div className="latest-card">
        <div className="top">
          <div className="text">
            <p className="c-team">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            className="latest-img"
            alt={`latest match ${competingTeam}`}
          />
          <div className="hide1">
            <p className="after-hr">First Innings</p>
            <p className="after-hr2">{firstInnings}</p>
            <p className="after-hr">Second Innings</p>
            <p className="after-hr2">{secondInnings}</p>
            <p className="after-hr">Man Of The Match</p>
            <p className="after-hr2">{manOfTheMatch}</p>
            <p className="after-hr">Umpires</p>
            <p className="after-hr2">{umpires}</p>
          </div>
        </div>
        <hr className="for-hr" />
        <div className="hide2">
          <p className="after-hr">First Innings</p>
          <p className="after-hr2">{firstInnings}</p>
          <p className="after-hr">Second Innings</p>
          <p className="after-hr2">{secondInnings}</p>
          <p className="after-hr">Man Of The Match</p>
          <p className="after-hr2">{manOfTheMatch}</p>
          <p className="after-hr">Umpires</p>
          <p className="after-hr2">{umpires}</p>
        </div>
      </div>
    )
  }
}

export default LatestMatch
