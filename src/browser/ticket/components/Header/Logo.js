import Component from 'react-pure-render/component'
import React from 'react'
import {Link} from 'react-router'

import LogoImage from '../../svg/LogoImage'

export default class Logo extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="logo">
        <Link to="/" className="logo-link">
          <LogoImage />
        </Link>
      </div>
    )
  }
}
