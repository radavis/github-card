import React, { Component } from 'react'
import SearchBox from './SearchBox'
import Profile from './Profile'
import './App.css'

const API = 'https://api.github.com/users'
const defaultProfile = {
  username: 'dpickett',
  name: 'Dan Pickett',
  avatar: 'https://avatars.githubusercontent.com/u/1082?v=3',
  location: 'Boston, MA',
  repos: '∞',
  followers: '∞',
  following: '∞',
  homeUrl: 'https://github.com/dpickett',
  found: true
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = defaultProfile
    this.fetchProfile = this.fetchProfile.bind(this)
  }

  fetchProfile(username) {
    let url = `${API}/${username}`

    fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(response.statusText)
      }
    })
    .then((json) => {
      this.setState({
        username: json.login,
        name: json.name,
        avatar: json.avatar_url,
        location: json.location,
        repos: json.public_repos,
        followers: json.followers,
        following: json.following,
        homeUrl: json.html_url,
        found: true
      })
    })
    .catch((error) => {
      console.log(`Response from GitHub API: ${error}`)
      this.setState({found: false})
    })
  }

  componentDidMount() {
    this.fetchProfile(this.state.username)
  }

  render() {
    return (
      <div>
        <section id="card">
          <SearchBox fetchProfile={this.fetchProfile} />
          <Profile data={this.state} />
        </section>
        <span className="creator">
          GitHub Card With ReactJs - Created By
          <a href="https://twitter.com/hesmaili95" target="_blank" title="Hamed Esmaili">
            Hamed Esmaili
          </a>
        </span>
      </div>
    )
  }
}

export default App
