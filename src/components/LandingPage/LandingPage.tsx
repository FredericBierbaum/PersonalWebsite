import React, { Component } from 'react'
import Navigation from './Navigation/Navigation'
import PortraitWithText from './PortraitWithText/PortraitWithText'

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Navigation/>   
        <PortraitWithText/>
      </div>
    )
  }
}
