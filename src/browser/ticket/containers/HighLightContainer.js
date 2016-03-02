import Component from 'react-pure-render/component'
import React from 'react'

import HighLight from '../components/HighLight/HighLight'

export default class HighlightContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const imageSet = [
      [
        {
          src: 'http://lorempixel.com/1920/640/nightlife',
          minwidth: '1024px'
        },
        {
          src: 'http://lorempixel.com/1500/500/nightlife',
          minwidth: '900px'
        },
        {
          src: 'http://lorempixel.com/900/675/nightlife',
        }
      ],
      [
        {
          src: 'http://lorempixel.com/1920/640/nature',
          minwidth: '1024px'
        },
        {
          src: 'http://lorempixel.com/1500/500/nature',
          minwidth: '900px'
        },
        {
          src: 'http://lorempixel.com/900/675/nature',
        }
      ]
    ]
    return (
      <HighLight
        imageSet={imageSet}
      />
    )
  }
}
