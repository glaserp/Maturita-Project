import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'
import Helmet from 'react-helmet'
import {connect} from 'react-redux'

import {fetch_events} from '../../../common/ticket/actions.js'

import Event from '../components/Event/Event'

class EventContainer extends Component {
  static propTypes = {
    events: PropTypes.array,
    url: PropTypes.string
  };

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(fetch_events())
  }

  render() {
    const {children, events, url} = this.props

    if (!events) {
      return <p>Načítám...</p>
    }

    const event = events.filter(event => event.id == url)[0]

    return (
      <div>
        <Helmet
          titleTemplate={event.title + ' - Detail - Vstupenky'}
        />
        <Event
          event={event}
          {...this.props}
        />
      </div>
    )
  }
}

export default connect(state => ({
  events: state.ticket.events
}))(EventContainer)
