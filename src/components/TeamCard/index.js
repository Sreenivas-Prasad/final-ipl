// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, teamImageUrl, name} = teamDetails

  return (
    <Link className="team" to={`/team-matches/${id}`}>
      <li className="team1">
        <img src={teamImageUrl} className="image2" alt={name} />
        <p className="para2">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
