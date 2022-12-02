// Write your code here

import {Component} from 'react'
import './index.css'

const MatchCard = props => {
  const {cardDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = cardDetails
  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        className="match-img"
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-team">{competingTeam}</p>
      <p className="match-r">{result}</p>
      <p className={matchStatus === 'Lost' ? 'match-s' : 'match-s2'}>
        {matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
