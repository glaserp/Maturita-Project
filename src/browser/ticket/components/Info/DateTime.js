import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'

export default class Place extends Component {
  static propTypes = {
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props)
  }

  render() {
    const {date, time} = this.props

    return (
      <li className="date">
        {date}, {time}
      </li>
    )
  }
}
