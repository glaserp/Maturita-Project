import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'
import Slider from 'react-slick'
import {Link} from 'react-router'

import HighLightItem from './HighLightItem'

export default class Highlight extends Component {
  static propTypes = {
    imageSet: PropTypes.array
  };

  constructor(props) {
    super(props)
  }

  render() {
    let {imageSet} = this.props

    if (!imageSet) {
      return <p>Načítám</p>
    }

    imageSet = imageSet.map((images) => (
      <div key = {images._id}>
        <Link to={'/detail/' + images.url} style={{display: 'block', margin: '0', padding: '0'}}><HighLightItem images = {images.images}/></Link>
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
