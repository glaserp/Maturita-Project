import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'

export default class HighlightItem extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    url: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props)
  }

  render() {
    let {images, url} = this.props
    images = images.map(image => (image.minwidth) ? (
        <source
          key = {image.src}
          srcSet = {image.src}
          media = {'(min-width: ' + image.minwidth + ')'}
        />
      ) : (
        <img
          key = {image.src}
          className = "highlight-picture"
          src = {image.src}
          alt = "Responsive picture"
        />
      )
    )

    return (
      <picture>
        {images}
      </picture>
    )
  }
}
