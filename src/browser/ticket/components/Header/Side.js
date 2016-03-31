import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'
import {Link} from 'react-router'

export default class Side extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="side">
        <input id="hamburger" type="checkbox" className="hamburger-checkbox" />
        <label htmlFor="hamburger" className="hamburger-label"></label>
        <nav className="side-menu">
          <Link to="/login" className="side-menu-link">Přihlásit</Link>
          <Link to="/register" className="side-menu-link">Registrovat</Link>
        </nav>
      </div>
    )
  }
}
