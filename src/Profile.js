import React from 'react'

const Profile = (props) => {
  if (!props.data.found) {
    return (
      <div className="not-found">
        <h2>Oops!</h2>
        <p>We could not find a GitHub user with that username. Try again.</p>
      </div>
    )
  }

  let data = props.data
  let followers = `${data.homeUrl}/followers`
  let repositories = `${data.homeUrl}?tab=repositories`
  let following = `${data.homeUrl}/following`

  return (
    <section className="github--profile">
      <div className="github--profile__info">
        <a href={data.homeUrl} title={data.name || data.username}>
          <img src={data.avatar} alt={data.username}/>
        </a>

        <h2>
          <a href={data.homeUrl} title={data.username}>
            {data.name || data.username}
          </a>
        </h2>
        <h3>{data.location}</h3>
      </div>

      <div className="github--profile__state">
        <ul>
           <li>
              <a href={followers} title="Number Of Followers">
                <i>{data.followers}</i>
                <span> Followers</span>
              </a>
           </li>
           <li>
              <a href={repositories} title="Number Of Repositories">
                <i>{data.repos}</i>
                <span> Repositories</span>
              </a>
           </li>
           <li>
              <a href={following} title="Number Of Following">
                <i>{data.following}</i>
                <span> Following</span>
              </a>
           </li>
        </ul>
      </div>
    </section>
  )
}

export default Profile
