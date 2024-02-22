// Write your code here

import './index.css'

const LatestMatch = props => {
  const {data} = props

  const {
    competingTeam,
    competingTeamLogo,
    firstInnings,
    date,
    result,
    secondInnings,
    umpires,

    venue,
    manOfTheMatch,
  } = data
  return (
    <li className="main_box_rowing">
      <div className="main_box_1">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{manOfTheMatch}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div className="main_box_2">
        <img
          src={competingTeamLogo}
          alt={`latest match${competingTeam}`}
          className="logo"
        />
      </div>
      <div className="main_box_3">
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man of the Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </li>
  )
}

export default LatestMatch
