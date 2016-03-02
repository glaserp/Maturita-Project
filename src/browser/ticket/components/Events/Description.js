import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'

export default class Place extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    eventimage: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props)
  }

  render() {
    const {title, text, eventimage} = this.props

    return (
      <div className="desc">
        <img src={eventimage.url}alt={title} className="event-picture" />
        <h2>{title}</h2>
        <p>
          {text}
        </p>
      </div>
    )
  }
}
