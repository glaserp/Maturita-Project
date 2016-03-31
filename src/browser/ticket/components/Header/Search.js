import Component from 'react-pure-render/component'
import React from 'react'

export default class Search extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="search">
        <form action="/search" method="post">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            name="search"
          />
          <button
            type="submit"
            className="search-button"
          />
        </form>
      </div>
    )
  }
}
