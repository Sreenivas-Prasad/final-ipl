// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {Route} from 'react-router-dom'
import TeamCard from '../TeamCard'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamMatches: [], matches: [], isLoading: true}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(url)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
    }
    const updatedData1 = data.recent_matches.map(each1 => ({
      competingTeam: each1.competing_team,
      competingTeamLogo: each1.competing_team_logo,
      date: each1.date,
      firstInnings: each1.first_innings,
      id: each1.id,
      manOfTheMatch: each1.man_of_the_match,
      matchStatus: each1.match_status,
      result: each1.result,
      secondInnings: each1.second_innings,
      umpires: each1.umpires,
      venue: each1.venue,
    }))
    this.setState({
      teamMatches: updatedData,
      matches: updatedData1,
      isLoading: false,
    })
  }

  render() {
    const {teamMatches, isLoading, matches} = this.state
    const {teamBannerUrl} = teamMatches
    return isLoading ? (
      <div>
        <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
      </div>
    ) : (
      <div className="matches">
        <img src={teamBannerUrl} className="team-img" alt="team banner" />
        <h1 className="team-heading">Latest matches</h1>
        <Route exact path="/team-matches/:id" component={LatestMatch} />
        <div className="forwrap">
          {matches.map(each2 => (
            <MatchCard key={each2.id} cardDetails={each2} />
          ))}
        </div>
      </div>
    )
  }
}

export default TeamMatches
