import Component from 'react-pure-render/component'
import React from 'react'

import Logo from './Logo'
import Search from './Search'
import SideContainer from '../../containers/SideContainer'

export default class Header extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className="header">
        <Logo/>
        <Search />
        <SideContainer/>
      </header>
    )
  }
}
