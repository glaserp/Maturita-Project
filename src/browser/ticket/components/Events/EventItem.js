import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'

import Datas from './Datas'
import Description from './Description'

export default class EventItem extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    image: PropTypes.object,
    datetime: PropTypes.object.isRequired,
    place: PropTypes.string.isRequired,
    money: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props)
  }

  render() {
    const {datetime, place, money, title, text, image, id} = this.props

    return (
      <li>
        <Description
          title={title}
          text={text}
          eventImage={image}
        />
        <Datas
          url={id}
          datetime={datetime}
          place={place}
          money={money}
        />
      </li>
    )
  }
}
