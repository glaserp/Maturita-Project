import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

import {fetch_events} from '../../../common/ticket/actions.js'

import Events from '../components/Events/Events'

class EventsContainer extends Component {
  static propTypes = {
    events: PropTypes.array
  };

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(fetch_events())
  }

  render() {
    const {events} = this.props

    if (!events) {
      return <p>Načítám...</p>
    }

    return (
      <Events
        events = {events}
      />
    )
  }
}

export default connect(state => ({
  events: state.ticket.events
}))(EventsContainer)
