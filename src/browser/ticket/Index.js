import Component from 'react-pure-render/component'
import React from 'react'

import Content from './components/Content'
import Head from './components/Header/Header'
import HighLightContainer from './containers/HighLightContainer'
import EventsNav from './components/Events/EventsNav'
import EventsContainer from './containers/EventsContainer'
import Footer from './components/Footer/Footer'

export default class Index extends Component {
  render() {
    return (
      <Content>
        <Head/>
        <HighLightContainer/>
        <article className="main">
          <EventsNav/>
          <section className="container">
            <EventsContainer/>
          </section>
        </article>
        <Footer/>
      </Content>
    )
  }
}
