import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'
import Slider from 'react-slick'

import HighLightItem from './HighLightItem'

export default class Highlight extends Component {
  static propTypes = {
    imageSet: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props)
  }

  render() {
    let {imageSet} = this.props
    imageSet = imageSet.map((images, id) => (
      <div key = {id}>
        <HighLightItem images = {images}/>
      </div>
    ))

    const settings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 15000,
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return (
      <section className="highlight">
        <Slider {...settings}>
          {imageSet}
        </Slider>
      </section>
    )
  }
}
