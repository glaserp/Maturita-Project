import Component from 'react-pure-render/component'
import React from 'react'
import {Link} from 'react-router'

import Content from './components/Content'
import Head from './components/Header/Header'
import HighLightContainer from './containers/HighLightContainer'
import EventContainer from './containers/EventContainer'
import Footer from './components/Footer/Footer'

export default class Detail extends Component {
  render() {
    const {children} = this.props
    return (
      <Content>
        <Head/>
        <HighLightContainer/>
        <article className="main">
          <section className="container">
            <EventContainer>
              {children}
            </EventContainer>
          </section>
        </article>
        <Footer/>
      </Content>
    )
  }
}
