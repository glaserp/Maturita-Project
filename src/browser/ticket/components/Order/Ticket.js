import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'
import {Link} from 'react-router'

export default class Ticket extends Component {
  static propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number
  };

  constructor(props) {
    super(props)
  }

  render() {
    const {name, price, count} = this.props

    return (
      <li className="ticket">
        <h2 className="ticket-name">{name}</h2>
        <h2 className="ticket-price">Zbývá: {count}</h2>
        <span className="btn-detail right">Do košíku ({price},-)</span>
      </li>
    )
  }
}
