import Component from 'react-pure-render/component'
import React from 'react'
import {Link} from 'react-router'

export default class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer className="footer">
        <div className="copyright">Copyright © 2016</div>
        <div className="links">
          <Link activeClassName="active" to="/">O nás</Link>
          <Link activeClassName="active" to="/">Kontakt</Link>
          <Link activeClassName="active" to="/">Prodejní místa</Link>
          <Link activeClassName="active" to="/">Obchodní podmínky</Link>
          <Link activeClassName="active" to="/">Ochrana osobních údajů</Link>
        </div>
      </footer>
    )
  }
}
