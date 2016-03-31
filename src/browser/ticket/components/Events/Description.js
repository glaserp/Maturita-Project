import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'

export default class Description extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    eventImage: PropTypes.object
  };

  constructor(props) {
    super(props)
  }

  render() {
    const {title, text, eventImage} = this.props

    return (
      <div className="desc">
        <img src={eventImage.url}alt={title} className="event-picture" />
        <h2>{title}</h2>
        <p>
          {text}
        </p>
      </div>
    )
  }
}
