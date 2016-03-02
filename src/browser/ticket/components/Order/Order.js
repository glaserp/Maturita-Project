import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'

import Ticket from './Ticket'

export default class Order extends Component {
  static propTypes = {
    tickets: PropTypes.array
  };

  constructor(props) {
    super(props)
  }

  render() {
    let {tickets} = this.props
    tickets = tickets.map(ticket => (<Ticket {...ticket} key={ticket.name}/>))

    return (
      <ul>
        {tickets}
      </ul>
    )
  }
}
