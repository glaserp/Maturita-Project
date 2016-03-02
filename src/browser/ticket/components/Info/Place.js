import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'

export default class Place extends Component {
  static propTypes = {
    place: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props)
  }

  render() {
    const {place} = this.props

    return (
      <li className="place">{place}</li>
    )
  }
}
