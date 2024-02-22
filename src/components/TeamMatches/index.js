import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamListData: [], isLoading: true}

  componentDidMount() {
    this.gettingData()
  }

  changeDetails = data => ({
    competingTeam: data.competing_team,

    competingTeamLogo: data.competing_team_logo,
    date: data.date,

    firstInnings: data.first_innings,

    matchStatus: data.match_status,

    result: data.result,

    secondInnings: data.second_innings,

    umpires: data.umpires,
    venue: data.venue,
  })

  gettingData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const data = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const response = await data.json()

    const newData = {
      teamBannerUrl: response.team_banner_url,
      latestMatchDetails: this.changeDetails(response.latest_match_details),
      recentMatches: response.recent_matches.map(each =>
        this.changeDetails(each),
      ),
    }

    this.setState({teamListData: newData, isLoading: false})
  }

  render() {
    const {teamListData, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamListData

    return (
      <div>
        <img src={teamBannerUrl} alt="banner" className="main_banner" />
        {isLoading ? (
          <div>
            {' '}
            <Loader
              type="Oval"
              color="#ffffff"
              height={250}
              width={250}
              testid="loader"
              className="spinner"
            />
          </div>
        ) : (
          <div>
            <ul>
              <LatestMatch data={latestMatchDetails} />
            </ul>
            <ul className="rowing">
              {' '}
              {recentMatches.map(each => (
                <MatchCard data={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
