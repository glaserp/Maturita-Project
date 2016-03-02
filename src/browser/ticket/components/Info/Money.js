import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'

export default class Place extends Component {
  static propTypes = {
    money: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props)
  }

  render() {
    const {money} = this.props

    return (
      <li className="money">{money}</li>
    )
  }
}
