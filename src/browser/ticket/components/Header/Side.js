import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'

import SideMenu from './SideMenu'

export default class Side extends Component {
  static propTypes = {
    sideMenuItems: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props)
  }

  render() {
    const {sideMenuItems} = this.props

    return (
      <div className="side">
        <input id="hamburger" type="checkbox" className="hamburger-checkbox" />
        <label htmlFor="hamburger" className="hamburger-label"></label>
        <SideMenu items={sideMenuItems} />
      </div>
    )
  }
}
