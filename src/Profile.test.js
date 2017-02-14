import React from 'react'
import { mount } from 'enzyme'
import Profile from './Profile'

const profileData = {
  username: 'dpickett',
  name: 'Dan Pickett',
  avatar: 'https://avatars.githubusercontent.com/u/1082?v=3',
  location: 'Boston, MA',
  repos: '∞',
  followers: '500',
  following: '99',
  homeUrl: 'https://github.com/dpickett',
  found: true
}

describe('<Profile />', () => {
  it('should set props for the data attribute', () => {
    const profileComponent = mount(<Profile data={profileData} />)
    expect(profileComponent.props().data).toBeDefined()
    // expect(profileComponent.props().data).toMatchObject(profileData)
  })

  describe('when a profile has been found', () => {
    it('displays the name of the user', () => {
      const profileComponent = mount(<Profile data={profileData} />)
      expect(profileComponent.text()).toContain('Dan Pickett')
    })

    it('displays the location of the user', () => {
      const profileComponent = mount(<Profile data={profileData} />)
      expect(profileComponent.text()).toContain('Boston, MA')
    })

    it('displays the number of repositories', () => {
      const profileComponent = mount(<Profile data={profileData} />)
      expect(profileComponent.text()).toContain('∞ Repositories')
    })

    it('displays the number of followers', () => {
      const profileComponent = mount(<Profile data={profileData} />)
      expect(profileComponent.text()).toContain('500 Followers')
    })

    it('displays the number of people this user is following', () => {
      const profileComponent = mount(<Profile data={profileData} />)
      expect(profileComponent.text()).toContain('99 Following')
    })
  })

  describe('when a user cannot be found', () => {
    it('diplays an error message', () => {
      const profileData = { found: false }
      const profileComponent = mount(<Profile data={profileData} />)
      expect(profileComponent.text()).toContain('We could not find a GitHub user with that username.')
    })
  })
})
