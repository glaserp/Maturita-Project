import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'

import Place from '../Info/Place'
import DateTime from '../Info/DateTime'
import Money from '../Info/Money'

export default class EventInfo extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    money: PropTypes.string.isRequired,
    datetime: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props)
  }

  render() {
    const {title, text, place, money, datetime} = this.props

    return (
      <section className="event-info">
        <h1>{title}</h1>
        <ul>
          <Place
            place={place}
          />
          <DateTime
            {...datetime}
          />
          <Money
            money={money}
          />
        </ul>
        <p>
          {text}
        </p>
      </section>
    )
  }
}
