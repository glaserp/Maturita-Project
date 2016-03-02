import Component from 'react-pure-render/component'
import React from 'react'

import Events from '../components/Events/Events'

export default class EventsContainer extends Component {
  render() {
    const events = [
      {
        title: 'Daniel Landa - Žito tour dojezd (Brno)',
        text: 'Daniel Landa po veleúspěšném tour v Letňanech opět vyráží na tour!',
        image: {
          url: 'http://lorempixel.com/100/100'
        },
        datetime: {
          date: '5. 11. 2016',
          time: '20:00'
        },
        place: 'DRFG Arena Brno',
        tickets: [
          {
            price: 1490,
            count: 100
          },
          {
            price: 590,
            count: 10000
          }
        ],
        id: 1
      },
      {
        title: 'Daniel Landa - Žito tour dojezd (Brno)',
        text: 'Daniel Landa po veleúspěšném tour v Letňanech opět vyráží na tour!',
        image: {
          url: 'http://lorempixel.com/100/100'
        },
        datetime: {
          date: '5. 11. 2016',
          time: '20:00'
        },
        place: 'DRFG Arena Brno',
        tickets: [
          {
            price: 1490,
            count: 100
          },
          {
            price: 590,
            count: 10000
          }
        ],
        id: 2
      },
      {
        title: 'Daniel Landa - Žito tour dojezd (Brno)',
        text: 'Daniel Landa po veleúspěšném tour v Letňanech opět vyráží na tour!',
        image: {
          url: 'http://lorempixel.com/100/100'
        },
        datetime: {
          date: '5. 11. 2016',
          time: '20:00'
        },
        place: 'DRFG Arena Brno',
        tickets: [
          {
            price: 1490,
            count: 100
          },
          {
            price: 590,
            count: 10000
          }
        ],
        id: 3
      }
    ]

    return (
      <Events
        events={events}
      />
    )
  }
}
