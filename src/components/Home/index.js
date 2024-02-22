import {Component} from 'react'

import './index.css'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

const teamsApiUrl = 'https://apis.ccbp.in/ipl/'

class Home extends Component {
  state = {teamsData: [], spinning: true}

  componentDidMount() {
    this.getTeamCard()
  }

  getTeamCard = async () => {
    const response = await fetch(teamsApiUrl)
    const data = await response.json()

    const changingData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({teamsData: changingData, spinning: false})
  }

  renderingData = () => {
    const {teamsData} = this.state
    return (
      <ul className="rowing">
        {teamsData.map(each => (
          <TeamCard teamsData={each} key={each.id} />
        ))}
      </ul>
    )
  }

  renderingLoader = () => {
    ;<div>
      <Loader
        type="Oval"
        color="#ffffff"
        height={250}
        width={250}
        className="spinner"
      />
    </div>
  }

  render() {
    const {spinning} = this.state
    return (
      <div className="main_background">
        <li className="logoandtext">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="ipl_logo"
            alt="ipl logo"
          />
          <h1 className="WHITE">IPL DASHBOARD</h1>
        </li>
        {spinning ? this.renderingLoader() : this.renderingData()}
      </div>
    )
  }
}

export default Home
