import React from "react"
import { Link } from "react-router-dom"

require("./Stats.scss")

class Stats extends React.Component {
  componentDidMount () {
    console.log("Stats component did mount")
    this.props.fetchStats()
  }
  capitalize (s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  getTime(ts) {
    const iso = new Date(ts).toISOString()
    const formated = iso.split('T')[0] + ' ' + iso.split('T')[1]
    return formated.split('.')[0]
  }

  render () {
    const { stats } = this.props
    return (
      stats && (
      <div className={"Stats-wrapper"}>
        <div className={"Stats-header"}>
          <Link to="/">
            <div className={"Stats-header__back-button"}>Back</div>
          </Link>
          <div className={"Stats-header__title"}>Workouts</div>
        </div>
        <div className={"Stats"}>
          <ul className={"Stats__list"}>
            {stats.map((x,i) =>
              <li className={"Stats__item"} key={i}>
                <div className={"Stats__header"}>
                  <div className={"Stats__name"}>
                    { this.capitalize(x.name) }
                  </div>
                  <div className={"Stats__time"}>
                    {this.getTime(x.createdAt)}
                  </div>
                </div>
                <div className={"Stats__body"}>
                  { x.mistakes } mistakes
                </div>
                <div className={"Stats__body"}>
                  { x.duration } seconds
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
      )
    )
  }
}

export default Stats
