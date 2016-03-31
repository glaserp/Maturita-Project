import Component from 'react-pure-render/component'
import React from 'react'
import Helmet from 'react-helmet'

import Content from './components/Content'
import Header from './components/Header/Header'
import HighLightContainer from './containers/HighLightContainer'
import EventsNav from './components/Events/EventsNav'
import EventsContainer from './containers/EventsContainer'
import Footer from './components/Footer/Footer'

export default class Index extends Component {
  render() {
    return (
      <Content>
        <Helmet
          meta={[{
            name: 'description',
            content: 'Maturitní projekt tvořený na SPŠ Třebíč'
          }]}
          meta={[{
            name: 'author',
            content: 'Petr Glaser'
          }]}
          titleTemplate="Úvod - Vstupenky"
        />
        <Header/>
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
