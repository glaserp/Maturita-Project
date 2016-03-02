import Component from 'react-pure-render/component'
import React from 'react'

import Side from '../components/Header/Side'

export default class SideContainer extends Component {
  render() {
    const sideMenuItems = [
      {
        link: '/login',
        text: 'Přihlásit'
      },
      {
        link: '/register',
        text: 'Registrovat'
      }
    ]

    return (
      <Side
        sideMenuItems={sideMenuItems}
      />
    )
  }
}
