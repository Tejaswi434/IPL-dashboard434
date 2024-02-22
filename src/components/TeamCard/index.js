import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamsData} = props
  const {name, id, teamImageUrl} = teamsData
  return (
    <li className="individual">
      <Link to={`/team-matches/${id}`}>
        <img src={teamImageUrl} className="sizing_image" alt={name} />
        <p>{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
