import Component from 'react-pure-render/component'
import React from 'react'

import Event from '../components/Event/Event'

export default class EventContainer extends Component {
  render() {
    const event = {
      title: 'Plavci - 50. výročí',
      text: `
              První turné proběhlo v jarních měsících letošního roku a začalo vytvářet tradici.
              Každoročně se budeme moci setkávat na jarních i předvánočních koncertech,
              na kterých zaznějí opravdové hity pro všechny generace.
              Na Vánočním koncertě rozezpívají a roztleskají publikum Rangers band,
              kteří si připomenou zároveň 50. výročí
              vzniku skupiny Rangers Plavci.
              40 let své existence si připomenou Karel Kahovec se svými George & Beatovens,
              přičemž nezapomenou ani na svého dlouhodobého frontmana Petra Nováka.
            `,
      datetime: {
        date: '5. 11. 2016',
        time: '20:00'
      },
      tickets: [
        {
          name: "VIP",
          price: 1490,
          count: 100
        },
        {
          name: "Classic",
          price: 590,
          count: 10000
        }
      ],
      place: 'DRFG Arena Brno'
    }

    const {children} = this.props

    return (
      <Event
        event={event}
        {...this.props}
      />
    )
  }
}
