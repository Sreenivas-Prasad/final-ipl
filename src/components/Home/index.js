// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {allTeams: [], isLoading: true}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const url = 'https://apis.ccbp.in/ipl'
    const response = await fetch(url)
    const data = await response.json()
    const updatedData = data.teams.map(each1 => ({
      id: each1.id,
      name: each1.name,
      teamImageUrl: each1.team_image_url,
    }))
    this.setState({allTeams: updatedData, isLoading: false})
  }

  render() {
    const {allTeams, isLoading} = this.state
    return (
      <div className="ipl">
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div>
            <div className="logo-heading">
              <img
                alt="ipl logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                className="image1"
              />
              <h1 className="heading1">IPL Dashboard</h1>
            </div>
            <ul className="allTeams">
              {allTeams.map(each2 => (
                <TeamCard teamDetails={each2} key={each2.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
