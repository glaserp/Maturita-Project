import Component from 'react-pure-render/component'
import React from 'react'

import Content from './components/Content'
import Header from './components/Header/Header'
import HighLightContainer from './containers/HighLightContainer'
import EventContainer from './containers/EventContainer'
import Footer from './components/Footer/Footer'

export default class Detail extends Component {
  render() {
    const {children} = this.props
    const {idEvent} = this.props.params
    return (
      <Content>
        <Header/>
        <HighLightContainer/>
        <article className="main">
          <section className="container">
            <EventContainer url={idEvent}>
              {children}
            </EventContainer>
          </section>
        </article>
        <Footer/>
      </Content>
    )
  }
}
