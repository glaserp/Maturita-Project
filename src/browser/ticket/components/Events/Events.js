import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'

import EventItem from './EventItem'

export default class Events extends Component {
  static propTypes = {
    events: PropTypes.array
  };

  constructor(props) {
    super(props)
  }

  render() {
    let {events} = this.props

    events = events.map(event => {
      event.money = event.tickets.filter(ticket => ticket.count > 0)
                                .map(ticket => ticket.price)
                                .join(" ")
      return (
        <EventItem
          id={event.id}
          title={event.title}
          text={event.text}
          image={event.image}
          datetime={event.datetime}
          place={event.place}
          money={event.money}
          key={event.id}
        />
      )}
    )

    return (
      <section className="events">
        <ul>
          {events}
        </ul>
      </section>
    )
  }
}
