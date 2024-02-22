// Write your code here
import './index.css'

const MatchCard = props => {
  const {data} = props
  console.log(data)
  const {
    competingTeam,
    competingTeamLogo,

    result,

    matchStatus,
  } = data

  const gettingcolor = datas => (datas === 'Won' ? 'red' : 'green')

  const value = gettingcolor(matchStatus)
  return (
    <div className="main_box">
      <img src={competingTeamLogo} className="logo" alt="logo" />
      <p>{competingTeam}</p>
      <p>{result}</p>

      <p className={value}>{matchStatus}</p>
    </div>
  )
}

export default MatchCard
