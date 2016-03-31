import Component from 'react-pure-render/component'
import React from 'react'
import Helmet from 'react-helmet'

import Content from './components/Content'
import Header from './components/Header/Header'
import HighLightContainer from './containers/HighLightContainer'
import EventsContainer from './containers/EventsContainer'
import Footer from './components/Footer/Footer'

export default class Index extends Component {
  render() {
    return (
      <Content>
        <Helmet
          titleTemplate="Vyhledávání - Vstupenky"
        />
        <Header/>
        <HighLightContainer/>
        <article className="main">
          <section className="container">
            <EventsContainer/>
          </section>
        </article>
        <Footer/>
      </Content>
    )
  }
}
