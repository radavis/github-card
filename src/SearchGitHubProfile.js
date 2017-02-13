import React, { Component } from 'react'
import './GitHubProfile.css'

class SearchGitHubProfile extends Component {
  render() {
    return (
      <div className="search--box">
         <form onSubmit={this.handleForm.bind(this)}>
           <label><input type="search" ref="username" placeholder="Type Username + Enter"/></label>
         </form>
      </div>
    )
  }

  handleForm(e) {
    e.preventDefault();
    let username = this.refs.username.getDOMNode().value
    this.props.fetchProfile(username);
    this.refs.username.getDOMNode().value = '';
  }
}

export default SearchGitHubProfile
