import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'
import {Link} from 'react-router'

export default class SideMenu extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props)
  }

  render() {
    const {items} = this.props

    const menuItems = items.map(item => (<Link to={item.link} className="side-menu-link" key={item.text}>{item.text}</Link>))

    return (
      <nav className="side-menu">
        {menuItems}
      </nav>
    )
  }
}
