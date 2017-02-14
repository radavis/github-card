import React, { Component } from 'react'

class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({username: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.fetchProfile(this.state.username)
    this.setState({ username: '' })
  }

  render() {
    return (
      <div className="search--box">
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <label>
            <input type="search" name="username" placeholder="Type Username + Enter" value={this.state.username} />
          </label>
        </form>
      </div>
    )
  }
}

export default SearchBox
