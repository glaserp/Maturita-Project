import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'
import {Link} from 'react-router'

import DateTime from '../Info/DateTime'
import Place from '../Info/Place'
import Money from '../Info/Money'

export default class Datas extends Component {
  static propTypes = {
    datetime: PropTypes.object.isRequired,
    place: PropTypes.string.isRequired,
    money: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props)
  }

  render() {
    const {datetime, place, money} = this.props

    return (
      <div className="datas">
        <ul>
          <Place
            place={place}
          />
          <DateTime
            {...datetime}
          />
        </ul>
        <ul>
          <Money
            money={money}
          />
          <li><Link to="detail" className="btn-detail">Zjistit více</Link></li>
        </ul>
      </div>
    )
  }
}
