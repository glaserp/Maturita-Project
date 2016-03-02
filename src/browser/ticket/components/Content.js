import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'

import './content.css'
import './normalize.css'

export default class Container extends Component {

  static propTypes = {
    children: PropTypes.node
  };

  render() {
    const {children} = this.props

    return (
      <div>
        {children}
      </div>
    )
  }
}
