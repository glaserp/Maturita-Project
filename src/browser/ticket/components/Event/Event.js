import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'
import {Link} from 'react-router'

import EventInfo from './EventInfo'

export default class Event extends Component {
  static propTypes = {
    event: PropTypes.object,
    children: PropTypes.node
  };

  constructor(props) {
    super(props)
  }

  render() {
    const {event, children} = this.props
    event.money = event.tickets.filter(ticket => ticket.count > 0)
                              .map(ticket => ticket.price).join(" ")

    return (
      <div>
        <EventInfo
          title={event.title}
          text={event.text}
          place={event.place}
          money={event.money}
          datetime={event.datetime}
        />
        <hr className="one" />
        <section className="order">
          {children ? React.cloneElement(children, {tickets: event.tickets}) :
            <Link to="/detail/order" className="btn-detail">Objednat</Link>
          }
        </section>
      </div>
    )
  }
}
