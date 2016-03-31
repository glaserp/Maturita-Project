import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

import {fetch_highlight} from '../../../common/ticket/actions.js'

import HighLight from '../components/HighLight/HighLight'

class HighlightContainer extends Component {
  static propTypes = {
    imageSet: PropTypes.array
  };

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(fetch_highlight())
  }

  render() {
    const {imageSet} = this.props

    return (
      <HighLight
        imageSet={imageSet}
      />
    )
  }
}

export default connect(state => ({
  imageSet: state.ticket.highlight
}))(HighlightContainer)
