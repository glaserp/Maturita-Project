import Component from 'react-pure-render/component'
import React from 'react'

export default class EventsNav extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <nav className="main-nav">
        <ul>
          <li className="active"><a>Vše</a></li>
          <li><a>Koncerty</a></li>
          <li><a>Divadelní představení</a></li>
          <li><a>Plesy</a></li>
          <li><a>Ostatní akce</a></li>
        </ul>
      </nav>
    )
  }
}
